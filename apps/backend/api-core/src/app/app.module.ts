import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppointmentModule } from 'backend/modules/appointment';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const modules = [AppointmentModule];
const imports = [
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    include: [AppointmentModule],
    autoSchemaFile: join(process.cwd(), 'apps/backend/api-core/src/schema.gql'),
  }),
];
@Module({
  imports: [...modules, ...imports],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
