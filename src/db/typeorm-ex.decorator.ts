import { SetMetadata } from '@nestjs/common';

export const TYPEORM_EX_CUSTOM_REPOSITORY = 'TYPEORM_EX_CUSTOM_REPOSITORY';
// Se creó esta funcion ya que typeORM deprecio la funcion Entity Repository
export function CustomRepository(entity: Function): ClassDecorator {
  return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity);
}
