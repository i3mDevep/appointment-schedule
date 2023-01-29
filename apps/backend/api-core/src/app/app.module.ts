import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CustomerModule } from 'backend/modules/customer';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

const modules = [CustomerModule];
const imports = [
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    include: [CustomerModule],
    autoSchemaFile: join(process.cwd(), 'apps/backend/api-core/src/schema.gql'),
  }),
];
@Module({
  imports: [...modules, ...imports],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
