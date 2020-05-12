from cached_property import cached_property


class Headers(list):
    def __init__(self, headers, *, fields, field_positions):
        assert len(fields) == len(field_positions)

        # Set params
        self.__field_positions = field_positions
        self.__errors = []

        # Extra headers
        if len(fields) < len(headers):
            iterator = headers[len(fields) :]
            start = max(field_positions) + 1
            del headers[len(fields) :]
            for field_position, header in enumerate(iterator, start=start):
                self.__errors.append(
                    self.spec.create_error(
                        'extra-header',
                        context={
                            'header': header,
                            'headers': self,
                            'fieldPosition': field_position,
                        },
                    )
                )

        # Missing headers
        if len(fields) > len(headers):
            start = len(headers) + 1
            iterator = zip(fields[len(headers) :], field_positions[len(headers) :])
            for field_number, (field_position, field) in enumerate(iterator, start=start):
                self.__errors.append(
                    self.spec.create_error(
                        'missing-header',
                        context={
                            'headers': self,
                            'fieldName': field.name,
                            'fieldNumber': field_number,
                            'fieldPosition': field_position,
                        },
                    )
                )

        # Iterate items
        field_number = 0
        for field_position, field, header in zip(field_positions, fields, headers):
            field_number += 1

            # Blank Header
            if header in (None, ''):
                self.__errors.append(
                    self.spec.create_error(
                        'blank-header',
                        context={
                            'headers': self,
                            'fieldNumber': field_number,
                            'fieldPosition': field_position,
                        },
                    )
                )

            # Duplicated Header
            duplicate_field_positions = []
            seen_headers = headers[0 : field_number - 1]
            seen_field_positions = field_positions[0 : field_number - 1]
            for seen_field_position, seen_header in zip(
                seen_field_positions, seen_headers
            ):
                if header == seen_header:
                    duplicate_field_positions.append(seen_field_position)
            if duplicate_field_positions:
                self.__errors.append(
                    self.spec.create_error(
                        'duplicate-header',
                        context={
                            'header': header,
                            'headers': self,
                            'fieldName': field.name,
                            'fieldNumber': field_number,
                            'fieldPosition': field_position,
                            'details': ', '.join(duplicate_field_positions),
                        },
                    )
                )

            # Non-matching Header
            if field.name != header:
                self.__errors.append(
                    self.spec.create_error(
                        'non-matching-header',
                        context={
                            'header': header,
                            'headers': self,
                            'fieldName': field.name,
                            'fieldNumber': field_number,
                            'fieldPosition': field_position,
                        },
                    )
                )

        # Save headers
        super().__init__(headers)

    @cached_property
    def field_positions(self):
        return self.__field_positions

    @cached_property
    def errors(self):
        return self.__errors
