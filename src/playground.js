/* eslint-disable no-case-declarations */
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
  QueryCommand,
} from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = 'rating-db';

const asd = 'asd';

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    'Access-Control-Allow-Credentials': true,
  };
  
  try {
    switch (event.routeKey) {
      case 'PUT /category':
        try {
          const timestamp = new Date().getTime();
          const data = JSON.parse(event.body);
          const userEmail = event.requestContext.authorizer.jwt.claims.email;
          
          const resp = await dynamo.send(
            new PutCommand({
              TableName: tableName,
              Item: { 
                pk: `${userEmail}#category`,
                sk: timestamp,
                categoryName: data.categoryName
               },
            })
          );


          body = { categoryName: data.categoryName , timestamp, userEmail, resp};

        } catch (err) {
          statusCode = 400;
          body = err.message;
        }
        break;

        case 'GET /get-category/{id}':
          const userEmail = event.requestContext.authorizer.jwt.claims.email;
          const id = event.pathParameters.id
          body = []
          
          const records = await dynamo.send(
                new QueryCommand({
                  TableName: tableName,
                  KeyConditionExpression: 'pk = :category',
                  ExpressionAttributeValues: {
                    ':category': `${userEmail}#item#${id}`,
                  },
                  ConsistentRead: true,
                })
              )
          
          if (records.Item) {
            body = records.Item
          }
          
          break;

        case 'GET /categories':
          body = []
          try {
            const userEmail = event.requestContext.authorizer.jwt.claims.email;
  
            const records = await dynamo.send(
              new QueryCommand({
                TableName: tableName,
                KeyConditionExpression: 'pk = :email',
                ExpressionAttributeValues: {
                  ':email': `${userEmail}#category`,
                },
                ConsistentRead: true,
              })
            )
            
            if (records?.Items) {
              body = records.Items.map(category => ({id: category.sk, name: category.categoryName}))
            }
  
          } catch (err) {
            statusCode = 400;
            body = err.message;
          }
          break;

      case 'GET /items':
        body = await dynamo.send(
          new QueryCommand({
            TableName: tableName,
            KeyConditionExpression: 'pk = :email',
            ExpressionAttributeValues: {
              ':email': 'gorka.lukasz88@gmail.com',
            },
            ConsistentRead: true,
          })
        );
        body = body.Items;
        break;

      case 'PUT /items':
        try {
          const userEmail = event.requestContext.authorizer.jwt.claims.email;
        const timestamp = new Date().getTime();
        const data = JSON.parse(event.body);

        const resp = await dynamo.send(
          new PutCommand({
            TableName: tableName,
            Item: { ...data, pk: `${userEmail}#item#${data.category}`, sk: timestamp },
          })
        );

        body = resp;
        } catch (err) {
          statusCode = 400;
          body = err.message;
        }
        
        break;

      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
