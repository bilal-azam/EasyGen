import {
    ArgumentMetadata,
    Injectable,
    PipeTransform,
    BadRequestException,
  } from '@nestjs/common';
  import { validate } from 'class-validator';
  import { plainToInstance } from 'class-transformer';
  
  @Injectable()
  export class ValidationPipe implements PipeTransform {
    async transform(value: any, { metatype }: ArgumentMetadata) {
      if (!metatype || !this.toValidate(metatype)) {
        return value;
      }
  
      const object = plainToInstance(metatype, value);
      const errors = await validate(object);
  
      if (errors.length > 0) {
        const message = errors
          .map((err) => Object.values(err.constraints))
          .join(', ');
        throw new BadRequestException(`Validation failed: ${message}`);
      }
  
      return value;
    }
  
    private toValidate(metatype: Function): boolean {
      const types: Function[] = [String, Boolean, Number, Array, Object];
      return !types.includes(metatype);
    }
  }
  