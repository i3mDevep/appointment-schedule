import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CustomerModule } from 'backend/modules/customer';
import { AppointmentModule } from 'backend/modules/appointment';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

const modules = [CustomerModule, AppointmentModule];
const imports = [
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    include: [CustomerModule, AppointmentModule],
    autoSchemaFile: join(process.cwd(), 'apps/backend/api-core/src/schema.gql'),
  }),
];
@Module({
  imports: [...modules, ...imports],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
