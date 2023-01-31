import request, { SuperTestGraphQL } from 'supertest-graphql';
import { Given, Then } from '@cucumber/cucumber';
import { application } from './hooks.steps';
import { gql } from 'apollo-server-express';
import * as assert from 'assert';

let _request: SuperTestGraphQL<unknown, Record<string, unknown>>;

Given('I send a query', (q: string) => {
  _request = request(application.app.getHttpServer()).query(gql`
    ${q}
  `);
});

Then('the response to query should be:', async (response: string) => {
  const expectedResponse = JSON.parse(response);
  const { data } = await _request.expectNoErrors();
  assert.deepEqual(data, expectedResponse);
});
