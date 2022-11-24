// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "mail",
    "version": "1"
  },
  "paths": {
    "/mail/dev": {
      "post": {
        "summary": "Send Mail",
        "description": "Send Mail",
        "tags": [
          "Mail Resources"
        ],
        "operationId": "api.post./mail/dev",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Mail"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Sucessfully Send charge",
            "schema": {
              "$ref": "#/definitions/IServiceResponse"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "Mail": {
      "properties": {
        "subject": {
          "title": "Mail.subject",
          "type": "string"
        },
        "body": {
          "title": "Mail.body",
          "type": "string"
        },
        "recipients": {
          "items": {
            "title": "Mail.recipients.[]",
            "type": "string"
          },
          "title": "Mail.recipients",
          "type": "array"
        }
      },
      "required": [
        "subject",
        "body",
        "recipients"
      ],
      "additionalProperties": false,
      "title": "Mail",
      "type": "object"
    },
    "IServiceResponse": {
      "properties": {
        "statusCode": {
          "title": "IServiceResponse.statusCode",
          "type": "number"
        },
        "timestamp": {
          "title": "IServiceResponse.timestamp",
          "type": "number"
        },
        "payload": {
          "title": "IServiceResponse.payload",
          "type": "object"
        }
      },
      "required": [
        "statusCode",
        "timestamp",
        "payload"
      ],
      "additionalProperties": false,
      "title": "IServiceResponse",
      "type": "object"
    }
  },
  "securityDefinitions": {}
};