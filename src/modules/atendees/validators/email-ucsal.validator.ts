import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsUcsalEmail(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      name: 'IsUcsalEmail',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (!value || typeof value !== 'string') {
            return false;
          }

          const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          if (!isValidEmail) {
            return false;
          }

          return (
            value.endsWith('@ucsal.edu.br') ||
            value.endsWith('@ucsal.br') ||
            value.endsWith('@pro.ucsal.br')
          );
        },
        defaultMessage() {
          return 'E-mail deve ser pertencer aos domínios ucsal.edu.br, ucsal.br ou pro.ucsal.br';
        },
      },
    });
  };
}
