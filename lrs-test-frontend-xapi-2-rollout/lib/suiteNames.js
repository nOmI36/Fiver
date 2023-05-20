/**
 * NO LONGER USED, HERE FOR REFERENCE ONLY.
 */
module.exports = [
  {
    "name": "All Requirements",
    "type": "suite"
  },
  {
    "name": "Document API Requirements",
    "type": "suite"
  },
  {
    "name": "An LRS has a State API with endpoint \"base IRI\"+\"/activities/state\" (7.3.table1.row1.a ,7.3.table1.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS has an Activities API with endpoint \"base IRI\" + /activities\" (7.5) **Implicit** (in that it is not named this by the spec)",
    "type": "test"
  },
  {
    "name": "An LRS has an Activity Profile API with endpoint \"base IRI\"+\"/activities/profile\" (7.3.table1.row2.a, 7.3.table1.row2.c)",
    "type": "test"
  },
  {
    "name": "An LRS has an Agents API with endpoint \"base IRI\" + /agents\" (7.6) **Implicit** (in that it is not named this by the spec)",
    "type": "test"
  },
  {
    "name": "An LRS has an Agent Profile API with endpoint \"base IRI\"+\"/agents/profile\" (7.3.table1.row3.a, 7.3.table1.row3.c)",
    "type": "test"
  },
  {
    "name": "An LRS has an About API with endpoint \"base IRI\"+\"/about\" (7.7.a)",
    "type": "test"
  },
  {
    "name": "An LRS will accept a POST request to the State API (7.3.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An LRS will accept a POST request to the Activity Profile API (7.3.table1.row2.b)",
    "type": "test"
  },
  {
    "name": "An LRS will accept a POST request to the Agent Profile API (7.3.table1.row3.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API, upon receiving a POST request for a document not currently in the LRS, treats it as a PUT request and store a new document (7.3.f)",
    "type": "test"
  },
  {
    "name": "An LRS's State API, rejects a POST request if the document is found and either document's type is not \"application/json\" with error code 400 Bad Request (7.3.e)",
    "type": "test"
  },
  {
    "name": "A Document Merge overwrites any duplicate Objects from the previous document with the new document. (7.3.d)",
    "type": "test"
  },
  {
    "name": "A Document Merge only performs overwrites at one level deep, although the entire object is replaced. (7.3.d)",
    "type": "test"
  },
  {
    "name": "An LRS's State API performs a Document Merge if a document is found and both it and the document in the POST request have type \"application/json\" (7.3.d)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API, upon receiving a POST request for a document not currently in the LRS, treats it as a PUT request and store a new document (7.3.f)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API, rejects a POST request if the document is found and either document's type is not \"application/json\" with error code 400 Bad Request (7.3.e)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API performs a Document Merge if a document is found and both it and the document in the POST request have type \"application/json\" (7.3.d)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API, upon receiving a POST request for a document not currently in the LRS, treats it as a PUT request and store a new document (7.3.f)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API, rejects a POST request if the document is found and either document's type is not \"application/json\" with error code 400 Bad Request (7.3.e)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API performs a Document Merge if a document is found and both it and the document in the POST request have type \"application/json\" (7.3.d)",
    "type": "test"
  },
  {
    "name": "An LRS's State API accepts PUT requests (7.4)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a PUT request without \"activityId\" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a PUT request without \"agent\" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row2.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a PUT request with \"agent\" as a parameter if it is not in JSON format with error code 400 Bad Request (format, 7.4.table1.row2.a)",
    "type": "test"
  },
  {
    "name": "An LRS's State API can process a PUT request with \"registration\" as a parameter (multiplicity, 7.4.table1.row3.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a PUT request without \"stateId\" as a parameter with error code 400 Bad Request(multiplicity, 7.4.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API upon processing a successful PUT request returns code 204 No Content (7.4.a)",
    "type": "test"
  },
  {
    "name": "An LRS's State API accepts POST requests (7.4)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a POST request without \"activityId\" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a POST request without \"agent\" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row2.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API can process a POST request with \"registration\" as a parameter (multiplicity, 7.4.table1.row3.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a POST request without \"stateId\" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API upon processing a successful POST request returns code 204 No Content (7.4.a)",
    "type": "test"
  },
  {
    "name": "An LRS's State API accepts GET requests (7.4)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a GET request without \"activityId\" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a GET request without \"agent\" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row2.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API can process a GET request with \"registration\" as a parameter (multiplicity, 7.4.table1.row3.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API can process a GET request with \"stateId\" as a parameter (multiplicity, 7.4.table1.row3.b, 7.4.table2.row3.b) (multiplicity, 7.4.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API can process a GET request with \"since\" as a parameter (multiplicity, 7.4.table2.row4.b, 7.4.table2.row3.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a GET request with \"since\" as a parameter if it is not a \"TimeStamp\", with error code 400 Bad Request (format, 7.4.table2.row4.a)",
    "type": "test"
  },
  {
    "name": "An LRS's State API upon processing a successful GET request with a valid \"stateId\" as a parameter returns the document satisfying the requirements of the GET and code 200 OK (7.4.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API upon processing a successful GET request without \"stateId\" as a parameter returns an array of ids of state data documents satisfying the requirements of the GET and code 200 OK (7.4.c)",
    "type": "test"
  },
  {
    "name": "An LRS's returned array of ids from a successful GET request all refer to documents stored after the TimeStamp in the \"since\" parameter of the GET request (7.4.table2.row4)",
    "type": "test"
  },
  {
    "name": "An LRS's State API accepts DELETE requests (7.4)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a DELETE request without \"activityId\" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a DELETE request without \"agent\" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row2.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API can process a DELETE request with \"registration\" as a parameter (multiplicity, 7.4.table1.row3.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API can process a DELETE request with \"stateId\" as a parameter (multiplicity, 7.4.table1.row3.b, 7.4.table2.row3.b) (multiplicity, 7.4.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API upon processing a successful DELETE request with a valid \"stateId\" as a parameter deletes the document satisfying the requirements of the DELETE and returns code 204 No Content (7.4.b)",
    "type": "test"
  },
  {
    "name": "An LRS's State API upon processing a successful DELETE request without \"stateId\" as a parameter deletes documents satisfying the requirements of the DELETE and code 204 No Content (7.4.d)",
    "type": "test"
  },
  {
    "name": "An LRS's Activities API accepts GET requests (7.5)",
    "type": "test"
  },
  {
    "name": "An LRS's Activities API rejects a GET request without \"activityId\" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An LRS's Activities API rejects a GET request with \"activityId\" as a parameter if it is not type \"String\" with error code 400 Bad Request (format, 7.5.table1.row1.a)",
    "type": "test"
  },
  {
    "name": "An LRS's Activities API upon processing a successful GET request returns the complete Activity Object (7.5)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API accepts PUT requests (7.5)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API rejects a PUT request without \"activityId\" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API rejects a PUT request without \"profileId\" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API upon processing a successful PUT request returns code 204 No Content (7.5.b)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API accepts POST requests (7.5)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API rejects a POST request without \"activityId\" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API rejects a POST request without \"profileId\" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API upon processing a successful POST request returns code 204 No Content (7.5.b)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API accepts DELETE requests (7.5)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API rejects a DELETE request without \"activityId\" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API rejects a DELETE request without \"profileId\" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API upon processing a successful DELETE request deletes the associated profile and returns code 204 No Content (7.5.b)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API accepts GET requests (7.5)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API rejects a GET request without \"activityId\" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API can process a GET request with \"since\" as a parameter (multiplicity, 7.5.table3.row2.c, 7.5.table3.row2.b)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API upon processing a successful GET request with a valid \"profileId\" as a parameter returns the document satisfying the requirements of the GET and code 200 OK (7.5.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API upon processing a successful GET request without \"profileId\" as a parameter returns an array of ids of activity profile documents satisfying the requirements of the GET and code 200 OK (7.5.d)",
    "type": "test"
  },
  {
    "name": "An LRS's returned array of ids from a successful GET request all refer to documents stored after the TimeStamp in the \"since\" parameter of the GET request if such a parameter was present (7.5.table3.row2)",
    "type": "test"
  },
  {
    "name": "An LRS's Agents API accepts GET requests (7.6)",
    "type": "test"
  },
  {
    "name": "An LRS's Agents API rejects a GET request without \"agent\" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table2.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API accepts PUT requests (7.6)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a PUT request without \"agent\" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a PUT request without \"profileId\" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row2.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API upon processing a successful PUT request returns code 204 No Content (7.6.e)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API accepts POST requests (7.6)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a POST request without \"agent\" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a POST request with \"agent\" as a parameter if it is not an Agent Object with error code 400 Bad Request (format, 7.6.table3.row1.a)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a POST request without \"profileId\" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row2.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API upon processing a successful POST request returns code 204 No Content (7.6.e)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API accepts DELETE requests (7.6)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a DELETE request without \"agent\" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a DELETE request without \"profileId\" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row2.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API upon processing a successful DELETE request deletes the associated profile and returns code 204 No Content (7.6.e)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API accepts GET requests (7.6)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a GET request without \"agent\" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row1.c, 7.6.table4.row1.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API can process a GET request with \"since\" as a parameter (Multiplicity, 7.6.table4.row2.a, 7.5.table4.row2.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API upon processing a successful GET request with a valid \"profileId\" as a parameter returns the document satisfying the requirements of the GET and code 200 OK (7.6, 7.6.f)",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API upon processing a successful GET request without \"profileId\" as a parameter returns an array of ids of agent profile documents satisfying the requirements of the GET and code 200 OK (7.6, 7.6.g)",
    "type": "test"
  },
  {
    "name": "An LRS's returned array of ids from a successful GET request all refer to documents stored after the TimeStamp in the \"since\" parameter of the GET request if such a parameter was present (7.6.table4.row2, 7.6.g)",
    "type": "test"
  },
  {
    "name": "An LRS's About API accepts GET requests (7.7.b)",
    "type": "test"
  },
  {
    "name": "An LRS's About API upon processing a successful GET request returns a version property and code 200 OK (multiplicity, 7.7.table1.row1.c, 7.7.c)",
    "type": "test"
  },
  {
    "name": "An LRS's About API's version property is an array of strings (format, 7.7.table1.row1.a)",
    "type": "test"
  },
  {
    "name": "An LRS's About API's version property contains at least one string of \"1.0.1\" (7.7.d)",
    "type": "test"
  },
  {
    "name": "An LRS's About API's version property can only have values of \".9\", \".95\", \"1.0\", \"1.0.0\", or \"\"1.0.\" + X\" with (7.7.d.a)",
    "type": "test"
  },
  {
    "name": "An LRS's About API upon processing a successful GET request can return an Extension with code 200 OK (multiplicity, 7.7.table1.row2.c, 7.7.c)",
    "type": "test"
  },
  {
    "name": "Any LRS API that accepts a POST request can accept a POST request with a single query string parameter named \"method\" on that request (7.8.a)",
    "type": "test"
  },
  {
    "name": "An LRS must parse the body of a Cross Origin Request and construct a new Request from it with the type of Request being the same as the value of the \"method\" parameter (7.8.a, 7.8.b)",
    "type": "test"
  },
  {
    "name": "An LRS will map form parameters from the body of the Cross Origin Request to the similarly named HTTP Headers in the new Request (7.8.b)",
    "type": "test"
  },
  {
    "name": "An LRS rejects a new Request in the same way for violating rules of this document as it would a normal Request **Implicit**",
    "type": "test"
  },
  {
    "name": "An LRS will reject any request sending content which does not have a form parameter with the name of \"content\" (7.8.c)",
    "type": "test"
  },
  {
    "name": "An LRS will reject a new Request with a form parameter named \"content\" if \"content\" is found to be binary data with error code 400 Bad Request (7.8.c)",
    "type": "test"
  },
  {
    "name": "An LRS will reject a Cross Origin Request which attempts to send attachment data with error code 400 Bad Request (7.8.d)",
    "type": "test"
  },
  {
    "name": "An LRS accepts HEAD requests (7.10.a)",
    "type": "test"
  },
  {
    "name": "A Person Object is an Object (7.6)",
    "type": "test"
  },
  {
    "name": "A Person Object's \"objectType\" property is a String and is \"Person\" (Format, Vocabulary, 7.6.table1.row1.a, 7.6.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "A Person Object's \"name\" property is an Array of Strings (Multiplicity, 7.6.table1.row2.a)",
    "type": "test"
  },
  {
    "name": "A Person Object's \"mbox\" property is an Array of IRIs (Multiplicity, 7.6.table1.row3.a)",
    "type": "test"
  },
  {
    "name": "A Person Object's \"mbox\" entries have the form \"mailto:emailaddress\" (Format, 7.6.table1.row3.a)",
    "type": "test"
  },
  {
    "name": "A Person Object's \"mbox_sha1sum\" property is an Array of Strings (Multiplicity, 7.6.table1.row4.a)",
    "type": "test"
  },
  {
    "name": "A Person Object's \"openid\" property is an Array of Strings (Multiplicity, 7.6.table1.row5.a)",
    "type": "test"
  },
  {
    "name": "A Person Object's \"account\" property is an Array of Account Objects (Multiplicity, 7.6.table1.row6.a)",
    "type": "test"
  },
  {
    "name": "A Person Object uses an \"objectType\" property exactly one time (Multiplicity, 7.6.table1.row1.c)",
    "type": "test"
  },
  {
    "name": "A Person Object uses a \"name\" property at most one time (Multiplicity, 7.6.table1.row2.c)",
    "type": "test"
  },
  {
    "name": "A Person Object uses a \"mbox\" property at most one time (Multiplicity, 7.6.table1.row3.c)",
    "type": "test"
  },
  {
    "name": "A Person Object uses a \"mbox_sha1sum\" property at most one time (Multiplicity, 7.6.table1.row4.c)",
    "type": "test"
  },
  {
    "name": "A Person Object uses an \"openid\" property at most one time (Multiplicity, 7.6.table1.row5.c)",
    "type": "test"
  },
  {
    "name": "A Person Object uses an \"account\" property at most one time (Multiplicity, 7.6.table1.row6.c)",
    "type": "test"
  },
  {
    "name": "An LRS cannot reject a POST request to the State API based on the contents of the name/value pairs of the document (Communication.md#2.2.b, Implicit) **Implicit**",
    "type": "suite"
  },
  {
    "name": "Should accept POST to State with document [object Object]",
    "type": "test"
  },
  {
    "name": "Should accept POST to State with document 1",
    "type": "test"
  },
  {
    "name": "Should accept POST to State with document true",
    "type": "test"
  },
  {
    "name": "An LRS cannot reject a POST request to the Activity Profile API based on the contents of the name/value pairs of the document (Communication.md#2.2.b, Implicit) **Implicit**",
    "type": "suite"
  },
  {
    "name": "Should accept POST to Activity profile with document [object Object]",
    "type": "test"
  },
  {
    "name": "Should accept POST to Activity profile with document 1",
    "type": "test"
  },
  {
    "name": "Should accept POST to Activity profile with document true",
    "type": "test"
  },
  {
    "name": "An LRS cannot reject a POST request to the Agent Profile API based on the contents of the name/value pairs of the document (Communication.md#2.2.b, Implicit) **Implicit**",
    "type": "suite"
  },
  {
    "name": "Should accept POST to Agent profile with document [object Object]",
    "type": "test"
  },
  {
    "name": "Should accept POST to Agent profile with document 1",
    "type": "test"
  },
  {
    "name": "Should accept POST to Agent profile with document true",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a PUT request with \"activityId\" as a parameter if it is not type \"String\" with error code 400 Bad Request (format, Communication.md#2.3.s3.table1.row1)",
    "type": "suite"
  },
  {
    "name": "Should State API reject a PUT request with activityId type [object Object]",
    "type": "test"
  },
  {
    "name": "Should State API reject a PUT request with activityId type 1",
    "type": "test"
  },
  {
    "name": "Should State API reject a PUT request with activityId type true",
    "type": "test"
  },
  {
    "name": "Should State API reject a PUT request with activityId type undefined",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a PUT request with \"registration\" as a parameter if it is not a UUID with error code 400 Bad Request(format, Communication.md#2.3.s3.table1.row3)",
    "type": "suite"
  },
  {
    "name": "Should reject PUT with \"registration\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject PUT with \"registration\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject PUT with \"registration\" with type not UUID",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a POST request with \"activityId\" as a parameter if it is not type \"String\" with error code 400 Bad Request (format, Communication.md#2.3.s3.table1.row1)",
    "type": "suite"
  },
  {
    "name": "Should reject PUT State with stateId type : 1",
    "type": "test"
  },
  {
    "name": "Should reject PUT State with stateId type : true",
    "type": "test"
  },
  {
    "name": "Should reject PUT State with stateId type : [object Object]",
    "type": "test"
  },
  {
    "name": "Should reject PUT State with stateId type : undefined",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a POST request with \"agent\" as a parameter if it is not in JSON format with error code 400 Bad Request (format, Communication.md#2.3.s3.table1.row2)",
    "type": "suite"
  },
  {
    "name": "Should reject POST State with agent type : 1",
    "type": "test"
  },
  {
    "name": "Should reject POST State with agent type : true",
    "type": "test"
  },
  {
    "name": "Should reject POST State with agent type : not JSON",
    "type": "test"
  },
  {
    "name": "Should reject POST State with agent type : undefined",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a POST request with \"registration\" as a parameter if it is not a UUID with error code 400 Bad Request (format, Communication.md#2.3.s3.table1.row3)",
    "type": "suite"
  },
  {
    "name": "Should reject POST with \"registration\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject POST with \"registration\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject POST with \"registration\" with type not UUID",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a GET request with \"activityId\" as a parameter if it is not type \"String\" with error code 400 Bad Request (format, Communication.md#2.3.s3.table1.row1)",
    "type": "suite"
  },
  {
    "name": "Should reject GET with \"activityId\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"activityId\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"activityId\" with type [object Object]",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"activityId\" with type undefined",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a GET request with \"agent\" as a parameter if it is not in JSON format with error code 400 Bad Request (format, Communication.md#2.3.s3.table1.row2)",
    "type": "suite"
  },
  {
    "name": "Should reject GET with \"agent\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"agent\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"agent\" with type not JSON",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"agent\" with type undefined",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a GET request with \"registration\" as a parameter if it is not a UUID with error code 400 Bad Request (format, Communication.md#2.3.s3.table1.row3)",
    "type": "suite"
  },
  {
    "name": "Should reject GET with \"registration\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"registration\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"registration\" with type not UUID",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a DELETE request with \"activityId\" as a parameter if it is not type \"String\" with error code 400 Bad Request (format, Communication.md#2.3.s3.table1.row1)",
    "type": "suite"
  },
  {
    "name": "Should reject DELETE with \"activityId\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"activityId\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"activityId\" with type [object Object]",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"activityId\" with type undefined",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a DELETE request with \"agent\" as a parameter if it is not in JSON format with error code 400 Bad Request (format, Communication.md#2.3.s3.table1.row2)",
    "type": "suite"
  },
  {
    "name": "Should reject DELETE with \"agent\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"agent\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"agent\" with type not JSON",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"agent\" with type undefined",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a DELETE request with \"registration\" as a parameter if it is not a UUID with error code 400 Bad Request (format, Communication.md#2.3.s3.table1.row3)",
    "type": "suite"
  },
  {
    "name": "Should reject DELETE with \"registration\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"registration\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"registration\" with type not UUID",
    "type": "test"
  },
  {
    "name": "An LRS's State API rejects a DELETE request with \"since\" as a parameter if it is not a \"TimeStamp\", with error code 400 Bad Request (format, Communication.md#2.3.s3.table1.row4)",
    "type": "suite"
  },
  {
    "name": "Should reject DELETE with \"since\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"since\" with type true",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API API rejects a PUT request with \"activityId\" as a parameter if it is not type \"String\" with error code 400 Bad Request (format, Communication.md#2.7.s3.table1.row1)",
    "type": "suite"
  },
  {
    "name": "Should reject PUT with \"activityId\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject PUT with \"activityId\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject PUT with \"activityId\" with type [object Object]",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API rejects a POST request with \"activityId\" as a parameter if it is not type \"String\" with error code 400 Bad Request (format, Communication.md#2.7.s3.table1.row1)",
    "type": "suite"
  },
  {
    "name": "Should reject POST with \"activityId\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject POST with \"activityId\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject POST with \"activityId\" with type [object Object]",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API rejects a DELETE request with \"activityId\" as a parameter if it is not type \"String\" with error code 400 Bad Request (format, Communication.md#2.7.s3.table1.row1)",
    "type": "suite"
  },
  {
    "name": "Should reject DELETE with \"activityId\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"activityId\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"activityId\" with type [object Object]",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API rejects a GET request with \"activityId\" as a parameter if it is not type \"String\" with error code 400 Bad Request (format, Communication.md#2.7.s3.table1.row1, Communication.md#2.7.s4.table1.row1)",
    "type": "suite"
  },
  {
    "name": "Should reject GET with \"activityId\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"activityId\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"activityId\" with type [object Object]",
    "type": "test"
  },
  {
    "name": "An LRS's Activity Profile API rejects a GET request with \"since\" as a parameter if it is not a \"TimeStamp\", with error code 400 Bad Request (format, Communication.md#2.7.s4.table1.row2)",
    "type": "suite"
  },
  {
    "name": "Should reject GET with \"since\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"since\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"since\" with type not Timestamp",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a PUT request with \"agent\" as a parameter if it is not an Agent Object with error code 400 Bad Request (format, 7.6.table3.row1.a)",
    "type": "suite"
  },
  {
    "name": "Should reject PUT with \"agent\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject PUT with \"agent\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject PUT with \"agent\" with type not Agent",
    "type": "test"
  },
  {
    "name": "Should reject PUT with \"agent\" with type [object Object]",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a DELETE request with \"agent\" as a parameter if it is not an Agent Object with error code 400 Bad Request (format, 7.6.table3.row1.a)",
    "type": "suite"
  },
  {
    "name": "Should reject DELETE with \"agent\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"agent\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"agent\" with type [object Object]",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a DELETE request with \"profileId\" as a parameter if it is not type \"String\" with error code 400 Bad Request (format, 7.6.table3.row2.a)",
    "type": "suite"
  },
  {
    "name": "Should reject DELETE with \"profileId\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"profileId\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject DELETE with \"profileId\" with type [object Object]",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a GET request with \"agent\" as a parameter if it is not an Actor Object with error code 400 Bad Request (format, 7.6.table3.row1.c, 7.6.table4.row1.c)",
    "type": "suite"
  },
  {
    "name": "Should reject GET with \"agent\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"agent\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"agent\" with type [object Object]",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"agent\" with type not Actor",
    "type": "test"
  },
  {
    "name": "An LRS's Agent Profile API rejects a GET request with \"since\" as a parameter if it is not a \"TimeStamp\", with error code 400 Bad Request (format, 7.6.table4.row2.a)",
    "type": "suite"
  },
  {
    "name": "Should reject GET with \"since\" with type 1",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"since\" with type true",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"since\" with type [object Object]",
    "type": "test"
  },
  {
    "name": "Should reject GET with \"since\" with type not timestamp",
    "type": "test"
  },
  {
    "name": "An LRS responds to a HEAD request in the same way as a GET request, but without the message-body (7.10.a, 7.10.a.a) **This means run ALL GET tests with HEAD**",
    "type": "suite"
  },
  {
    "name": "should succeed HEAD about with no body",
    "type": "test"
  },
  {
    "name": "should succeed HEAD activities with no body",
    "type": "test"
  },
  {
    "name": "should succeed HEAD activities profile with no body",
    "type": "test"
  },
  {
    "name": "should succeed HEAD activities state with no body",
    "type": "test"
  },
  {
    "name": "should succeed HEAD agents with no body",
    "type": "test"
  },
  {
    "name": "should succeed HEAD agents profile with no body",
    "type": "test"
  },
  {
    "name": "should succeed HEAD statements with no body",
    "type": "test"
  },
  {
    "name": "An LRS populates the \"authority\" property if it is not provided in the Statement, based on header information with the Agent corresponding to the user (contained within the header) (Implicit, 4.1.9.b, 4.1.9.c)",
    "type": "suite"
  },
  {
    "name": "should populate authority",
    "type": "test"
  },
  {
    "name": "A Voiding Statement cannot Target another Voiding Statement (4.3)",
    "type": "suite"
  },
  {
    "name": "should fail when \"StatementRef\" points to a voiding statement",
    "type": "test"
  },
  {
    "name": "An LRS returns a ContextActivity in an array, even if only a single ContextActivity is returned (4.1.6.2.c, 4.1.6.2.d)",
    "type": "suite"
  },
  {
    "name": "should return array for statement context \"parent\"  when single ContextActivity is passed",
    "type": "test"
  },
  {
    "name": "should return array for statement context \"grouping\"  when single ContextActivity is passed",
    "type": "test"
  },
  {
    "name": "should return array for statement context \"category\"  when single ContextActivity is passed",
    "type": "test"
  },
  {
    "name": "should return array for statement context \"other\"  when single ContextActivity is passed",
    "type": "test"
  },
  {
    "name": "should return array for statement substatement context \"parent\"  when single ContextActivity is passed",
    "type": "test"
  },
  {
    "name": "should return array for statement substatement context \"grouping\"  when single ContextActivity is passed",
    "type": "test"
  },
  {
    "name": "should return array for statement substatement context \"category\"  when single ContextActivity is passed",
    "type": "test"
  },
  {
    "name": "should return array for statement substatement context \"other\"  when single ContextActivity is passed",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a Request which uses Attachments and does not have a \"Content-Type\" header with value \"application/json\" or \"multipart/mixed\" (Format, 4.1.11.a, 4.1.11.b)",
    "type": "suite"
  },
  {
    "name": "should succeed when attachment uses \"fileUrl\" and request content-type is \"application/json\"",
    "type": "test"
  },
  {
    "name": "should fail when attachment uses \"fileUrl\" and request content-type is \"multipart/form-data\"",
    "type": "test"
  },
  {
    "name": "should succeed when attachment is raw data and request content-type is \"multipart/mixed\"",
    "type": "test"
  },
  {
    "name": "should fail when attachment is raw data and request content-type is \"multipart/form-data\"",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a \"Content-Type\" header with value \"application/json\", and has a discrepancy in the number of Attachments vs. the number of fileURL members (4.1.11.a)",
    "type": "suite"
  },
  {
    "name": "should fail when passing statement attachments and missing attachment\"s binary",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a \"Content Type\" header with value \"multipart/mixed\", and does not have a body header named \"Content-Type\" with value \"multipart/mixed\" (RFC 1341)",
    "type": "suite"
  },
  {
    "name": "should fail when attachment is raw data and first part content type is not \"application/json\"",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a \"Content Type\" header with value \"multipart/mixed\", and does not have a body header named \"boundary\" (4.1.11.b, RFC 1341)",
    "type": "suite"
  },
  {
    "name": "should fail if boundary not provided in body",
    "type": "test"
  },
  {
    "name": "A Boundary is defined as the value of the body header named \"boundary\" (Definition, 4.1.11.b, RFC 1341)",
    "type": "suite"
  },
  {
    "name": "should fail if boundary not provided in header",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a \"Content Type\" header with value \"multipart/mixed\", and does not have a Boundary before each \"Content-Type\" header (4.1.11.b, RFC 1341)",
    "type": "suite"
  },
  {
    "name": "should fail if boundary not provided in body",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a \"Content Type\" header with value \"multipart/mixed\", and does not the first document part with a \"Content-Type\" header with a value of \"application/json\" (RFC 1341, 4.1.11.b.a)",
    "type": "suite"
  },
  {
    "name": "should fail when attachment is raw data and first part content type is not \"application/json\"",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a \"Content Type\" header with value \"multipart/mixed\", and does not have all of the Statements in the first document part (RFC 1341, 4.1.11.b.a)",
    "type": "suite"
  },
  {
    "name": "should fail when statements separated into multiple parts",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a \"Content Type\" header with value \"multipart/mixed\", and for any part except the first does not have a Header named \"X-Experience-API-Hash\" with a value of one of those found in a \"sha2\" property of a Statement in the first part of this document (4.1.11.b.c, 4.1.11.b.d)",
    "type": "suite"
  },
  {
    "name": "should fail when attachments missing header \"X-Experience-API-Hash\"",
    "type": "test"
  },
  {
    "name": "should fail when attachments header \"X-Experience-API-Hash\" does not match \"sha2\"",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a Request which does not use a \"X-Experience-API-Version\" header name to any API except the About API (Format, 6.2.a, 6.2.f, 7.7.f)",
    "type": "suite"
  },
  {
    "name": "should pass when GET without header \"X-Experience-API-Version\"",
    "type": "test"
  },
  {
    "name": "should fail when statement GET without header \"X-Experience-API-Version\"",
    "type": "test"
  },
  {
    "name": "should fail when statement POST without header \"X-Experience-API-Version\"",
    "type": "test"
  },
  {
    "name": "should fail when statement PUT without header \"X-Experience-API-Version\"",
    "type": "test"
  },
  {
    "name": "An LRS modifies the value of the header of any Statement not rejected by the previous three requirements to \"1.0.2\" (4.1.10.b)",
    "type": "suite"
  },
  {
    "name": "should respond with header \"version\" set to \"1.0.2\"",
    "type": "test"
  },
  {
    "name": "An LRS will not modify Statements based on a \"version\" before \"1.0.1\" (6.2.l)",
    "type": "suite"
  },
  {
    "name": "should not convert newer version format to prior version format",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request any request to an API which uses a parameter with differing case (7.0.b)",
    "type": "suite"
  },
  {
    "name": "should fail on PUT statement when not using \"statementId\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"statementId\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"voidedStatementId\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"agent\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"verb\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"activity\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"registration\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"related_activities\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"related_agents\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"since\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"until\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"limit\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"format\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"attachments\"",
    "type": "test"
  },
  {
    "name": "should fail on GET statement when not using \"ascending\"",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 405 Method Not Allowed to any request to an API which uses a method not in this specification **Implicit ONLY in that HTML normally does this behavior**",
    "type": "suite"
  },
  {
    "name": "should fail with statement \"DELETE\"",
    "type": "test"
  },
  {
    "name": "should fail with activities \"DELETE\"",
    "type": "test"
  },
  {
    "name": "should fail with activities \"POST\"",
    "type": "test"
  },
  {
    "name": "should fail with activities \"PUT\"",
    "type": "test"
  },
  {
    "name": "should fail with agents \"DELETE\"",
    "type": "test"
  },
  {
    "name": "should fail with agents \"POST\"",
    "type": "test"
  },
  {
    "name": "should fail with agents \"PUT\"",
    "type": "test"
  },
  {
    "name": "An LRS does not process any batch of Statements in which one or more Statements is rejected and if necessary, restores the LRS to the state in which it was before the batch began processing (7.0.c, **Implicit**)",
    "type": "suite"
  },
  {
    "name": "should not persist any statements on a single failure",
    "type": "test"
  },
  {
    "name": "An LRS has a Statement API with endpoint \"base IRI\"+\"/statements\" (7.2)",
    "type": "suite"
  },
  {
    "name": "should allow \"/statements\" POST",
    "type": "test"
  },
  {
    "name": "should allow \"/statements\" PUT",
    "type": "test"
  },
  {
    "name": "should allow \"/statements\" GET",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API accepts PUT requests (7.2.1)",
    "type": "suite"
  },
  {
    "name": "should persist statement using \"PUT\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API accepts PUT requests only if it contains a \"statementId\" parameter (Multiplicity, 7.2.1.table1.a)",
    "type": "suite"
  },
  {
    "name": "should persist statement using \"statementId\" parameter",
    "type": "test"
  },
  {
    "name": "should fail without using \"statementId\" parameter",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API accepts PUT requests only if the \"statementId\" parameter is a String (Type, 7.2.1.table1.b)",
    "type": "suite"
  },
  {
    "name": "should fail statement using \"statementId\" parameter as boolean",
    "type": "test"
  },
  {
    "name": "should fail statement using \"statementId\" parameter as object",
    "type": "test"
  },
  {
    "name": "An LRS cannot modify a Statement, state, or Object in the event it receives a Statement with statementID equal to a Statement in the LRS already. (7.2.1.a, 7.2.2.b)",
    "type": "suite"
  },
  {
    "name": "should not update statement with matching \"statementId\" on POST",
    "type": "test"
  },
  {
    "name": "should not update statement with matching \"statementId\" on PUT",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API upon processing a successful PUT request returns code 204 No Content (7.2.1)",
    "type": "suite"
  },
  {
    "name": "should persist statement and return status 204",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API rejects with error code 409 Conflict any Statement with the \"statementID\" parameter equal to a Statement in the LRS already **Implicit** (7.2.1.b, 7.2.2.b)",
    "type": "suite"
  },
  {
    "name": "should return 409 or 204 when statement ID already exists on POST",
    "type": "test"
  },
  {
    "name": "should return 409 or 204 when statement ID already exists on PUT",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API accepts POST requests (7.2.2)",
    "type": "suite"
  },
  {
    "name": "should persist statement using \"POST\"",
    "type": "test"
  },
  {
    "name": "The LRS will NOT reject a GET request which returns an empty \"statements\" property (**Implicit**, 4.2.table1.row1.b)",
    "type": "suite"
  },
  {
    "name": "should return empty array list",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API upon processing a successful POST request returns code 200 No Content and all Statement UUIDs within the POST **Implicit** (7.2.2)",
    "type": "suite"
  },
  {
    "name": "should persist statement using \"POST\" and return array if IDs",
    "type": "test"
  },
  {
    "name": "A \"more\" property is an IRL (Format, 4.2.table1.row2.a)",
    "type": "suite"
  },
  {
    "name": "should return \"more\" property as an IRL",
    "type": "test"
  },
  {
    "name": "The \"more\" property is an empty string if the entire results of the original GET request have been returned (4.2.table1.row2.b)",
    "type": "suite"
  },
  {
    "name": "should return empty \"more\" property when all statements returned",
    "type": "test"
  },
  {
    "name": "If not empty, the \"more\" property's IRL refers to a specific container object corresponding to the next page of results from the orignal GET request (4.2.table1.row1.b)",
    "type": "suite"
  },
  {
    "name": "should return \"more\" which refers to next page of results",
    "type": "test"
  },
  {
    "name": "A Voided Statement is defined as a Statement that is not a Voiding Statement and is the Target of a Voiding Statement within the LRS (4.2.c)",
    "type": "suite"
  },
  {
    "name": "should return a voided statement when using GET \"voidedStatementId\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API, upon processing a successful GET request, can only return a Voided Statement if that Statement is specified in the voidedStatementId parameter of that request (7.2.4.a)",
    "type": "suite"
  },
  {
    "name": "should not return a voided statement if using GET \"statementId\"",
    "type": "test"
  },
  {
    "name": "LRS's Statement API accepts GET requests (7.2.3)",
    "type": "suite"
  },
  {
    "name": "should return using GET",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"statementId\" as a parameter (7.2.3)",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"statementId\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"voidedStatementId\" as a parameter  (7.2.3)",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"voidedStatementId\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API rejects a GET request with both \"statementId\" and anything other than \"attachments\" or \"format\" as parameters (7.2.3.a, 7.2.3.b) with error code 400 Bad Request.",
    "type": "suite"
  },
  {
    "name": "should fail when using \"statementId\" with \"agent\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"statementId\" with \"verb\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"statementId\" with \"activity\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"statementId\" with \"registration\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"statementId\" with \"related_activities\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"statementId\" with \"related_agents\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"statementId\" with \"since\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"statementId\" with \"until\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"statementId\" with \"limit\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"statementId\" with \"ascending\"",
    "type": "test"
  },
  {
    "name": "should pass when using \"statementId\" with \"format\"",
    "type": "test"
  },
  {
    "name": "should pass when using \"statementId\" with \"attachments\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"agent\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"agent\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"verb\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"verb\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"activity\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"activity\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"registration\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"registration\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"related_activities\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"related_activities\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"related_agents\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"related_agents\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"since\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"since\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"until\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"until\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"limit\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"limit\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"format\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"format\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"attachments\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"attachments\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API can process a GET request with \"ascending\" as a parameter  **Implicit**",
    "type": "suite"
  },
  {
    "name": "should process using GET with \"ascending\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API rejects a GET request with both \"voidedStatementId\" and anything other than \"attachments\" or \"format\" as parameters (7.2.3.a, 7.2.3.b) with error code 400 Bad Request.",
    "type": "suite"
  },
  {
    "name": "should fail when using \"voidedStatementId\" with \"agent\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"voidedStatementId\" with \"verb\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"voidedStatementId\" with \"activity\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"voidedStatementId\" with \"registration\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"voidedStatementId\" with \"related_activities\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"voidedStatementId\" with \"related_agents\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"voidedStatementId\" with \"since\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"voidedStatementId\" with \"until\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"voidedStatementId\" with \"limit\"",
    "type": "test"
  },
  {
    "name": "should fail when using \"voidedStatementId\" with \"ascending\"",
    "type": "test"
  },
  {
    "name": "should pass when using \"voidedStatementId\" with \"format\"",
    "type": "test"
  },
  {
    "name": "should pass when using \"voidedStatementId\" with \"attachments\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API upon processing a successful GET request with a \"statementId\" parameter, returns code 200 OK and a single Statement with the corresponding \"id\".  (7.2.3)",
    "type": "suite"
  },
  {
    "name": "should retrieve statement using \"statementId\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API upon processing a successful GET request with a \"voidedStatementId\" parameter, returns code 200 OK and a single Statement with the corresponding \"id\".  (7.2.3)",
    "type": "suite"
  },
  {
    "name": "should return a voided statement when using GET \"voidedStatementId\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API upon processing a successful GET request with neither a \"statementId\" nor a \"voidedStatementId\" parameter, returns code 200 OK and a StatementResult Object.  (7.2.3)",
    "type": "suite"
  },
  {
    "name": "should return StatementResult using GET without \"statementId\" or \"voidedStatementId\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult using GET with \"agent\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult using GET with \"verb\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult using GET with \"activity\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult using GET with \"registration\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult using GET with \"related_activities\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult using GET with \"related_agents\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult using GET with \"since\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult using GET with \"until\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult using GET with \"limit\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult using GET with \"ascending\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult using GET with \"format\"",
    "type": "test"
  },
  {
    "name": "should return multipart response format StatementResult using GET with \"attachments\" parameter as true",
    "type": "test"
  },
  {
    "name": "should not return multipart response format using GET with \"attachments\" parameter as false",
    "type": "test"
  },
  {
    "name": "An LRS's \"X-Experience-API-Consistent-Through\" header's value is not before (temporal) any of the \"stored\" values of any of the returned Statements (7.2.3.c).",
    "type": "suite"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" when using GET for statements",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API upon processing a GET request, returns a header with name \"X-Experience-API-Consistent-Through\" regardless of the code returned. (7.2.3.c)",
    "type": "suite"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"agent\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"verb\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"activity\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"registration\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"related_activities\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"related_agents\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"since\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"until\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"limit\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"ascending\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"format\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"attachments\"",
    "type": "test"
  },
  {
    "name": "An LRS's \"X-Experience-API-Consistent-Through\" header is an ISO 8601 combined date and time (Type, 7.2.3.c).",
    "type": "suite"
  },
  {
    "name": "should return valid \"X-Experience-API-Consistent-Through\" using GET",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"agent\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"verb\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"activity\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"registration\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"related_activities\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"related_agents\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"since\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"until\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"limit\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"ascending\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"format\"",
    "type": "test"
  },
  {
    "name": "should return \"X-Experience-API-Consistent-Through\" using GET with \"attachments\"",
    "type": "test"
  },
  {
    "name": "A \"statements\" property is an Array of Statements (Type, 4.2.table1.row1.a)",
    "type": "suite"
  },
  {
    "name": "should return StatementResult with statements as array using GET without \"statementId\" or \"voidedStatementId\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"agent\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"verb\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"activity\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"registration\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"related_activities\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"related_agents\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"since\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"until\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"limit\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"ascending\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"format\"",
    "type": "test"
  },
  {
    "name": "should return StatementResult with statements as array using GET with \"attachments\"",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API, upon processing a successful GET request wishing to return a Voided Statement still returns Statements which target it (7.2.4.b)",
    "type": "suite"
  },
  {
    "name": "should only return Object StatementRef when using \"since\"",
    "type": "test"
  },
  {
    "name": "should only return voiding statement when using \"until\"",
    "type": "test"
  },
  {
    "name": "should only return Object StatementRef when using \"limit\"",
    "type": "test"
  },
  {
    "name": "should return StatementRef and voiding statement when not using \"since\", \"until\", \"limit\"",
    "type": "test"
  },
  {
    "name": "Miscellaneous Requirements",
    "type": "suite"
  },
  {
    "name": "All Objects are well-created JSON Objects (Nature of binding) **Implicit**",
    "type": "test"
  },
  {
    "name": "All Strings are encoded and interpreted as UTF-8 (6.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement uses the \"id\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement uses the \"actor\" property exactly one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement uses the \"verb\" property exactly one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement uses the \"object\" property exactly one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement uses the \"result\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement uses the \"context\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement uses the \"timestamp\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement uses the \"stored\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement uses the \"authority\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement uses the \"version\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement uses the \"attachments\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Group uses the \"name\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Group uses the \"member\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An \"actor\" property uses the \"objectType\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Agent uses the \"mbox_sha1sum\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Agent uses the \"openid\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Agent uses the \"account\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Agent uses the \"name\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Agent uses the \"mbox\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Anonymous Group uses the \"member\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Identified Group uses the \"mbox\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Identified Group uses the \"mbox_sha1sum\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Identified Group uses the \"openid\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Identified Group uses the \"account\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Account Object uses the \"homePage\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Account Object property uses the \"name\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A \"verb\" property uses the \"id\" property at most one time (Multiplicity, 4.1.3.table1.row1.aultiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Voiding Statement's Target is defined as the Statement corresponding to the \"object\" property's \"id\" property's IRI (4.3.b)",
    "type": "test"
  },
  {
    "name": "A \"verb\" property uses the \"display\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An \"object\" property uses the \"objectType\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An \"object\" property uses the \"id\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An \"object\" property uses the \"definition\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity is defined by the \"objectType\" of an \"object\" with value \"Activity\" (4.1.4.1.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An Activity uses the \"definition\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"name\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"description\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"type\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"moreInfo\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"interactionType\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"correctResponsesPattern\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"choices\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"scale\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"source\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"target\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"steps\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Interaction Component uses the \"id\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Interaction Component uses the \"description\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "An Activity Definition uses the \"extensions\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A Statement Reference uses the \"id\" property at most one time (Multiplicity, 4.1.a)",
    "type": "test"
  },
  {
    "name": "A \"score\" Object uses a \"scaled\" property at most one time (Multiplicity, 4.1.5.1.table1.row1.c)",
    "type": "test"
  },
  {
    "name": "A \"score\" Object uses a \"raw\" property at most one time (Multiplicity, 4.1.5.1.table1.row3.c)",
    "type": "test"
  },
  {
    "name": "A \"score\" Object uses a \"min\" property at most one time (Multiplicity, 4.1.5.1.table1.row3.c)",
    "type": "test"
  },
  {
    "name": "A \"score\" Object uses a \"max\" property at most one time (Multiplicity, 4.1.5.1.table1.row4.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"result\" property uses a \"success\" property at most one time (Multiplicity, 4.1.5.table1.row2.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"result\" property uses a \"completion\" property at most one time (Multiplicity, 4.1.5.table1.row3.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"result\" property uses a \"response\" property at most one time (Multiplicity, 4.1.5.table1.row3.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"result\" property uses a \"duration\" property at most one time (Multiplicity, 4.1.5.table1.row3.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"result\" property uses an \"extensions\" property at most one time (Multiplicity, 4.1.5.table1.row3.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"context\" property uses a \"registration\" property at most one time (Multiplicity, 4.1.6.table1.row1.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"context\" property uses an \"instructor\" property at most one time (Multiplicity, 4.1.6.table1.row2.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"context\" property uses an \"team\" property at most one time (Multiplicity, 4.1.6.table1.row3.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"context\" property uses a \"contextActivities\" property at most one time (Multiplicity, 4.1.6.table1.row4.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"context\" property uses an \"revision\" property at most one time (Multiplicity, 4.1.6.table1.row5.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"context\" property uses an \"platform\" property at most one time (Multiplicity, 4.1.6.table1.row6.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"context\" property uses a \"language\" property at most one time (Multiplicity, 4.1.6.table1.row7.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"context\" property uses a \"statement\" property at most one time (Multiplicity, 4.1.6.table1.row8.c)",
    "type": "test"
  },
  {
    "name": "A Statement's \"context\" property uses an \"extensions\" property at most one time (Multiplicity, 4.1.6.table1.row9.c)",
    "type": "test"
  },
  {
    "name": "An Attachment uses a \"usageType\" property exactly one time (Multiplicity, 4.1.11.table1.row1.c)",
    "type": "test"
  },
  {
    "name": "An Attachment uses a \"display\" property exactly one time (Multiplicity, 4.1.11.table1.row2.c)",
    "type": "test"
  },
  {
    "name": "An Attachment uses a \"description\" property at most one time (Multiplicity, 4.1.11.table1.row3.c)",
    "type": "test"
  },
  {
    "name": "An Attachment uses a \"contentType\" property exactly one time (Multiplicity, 4.1.11.table1.row4.c)",
    "type": "test"
  },
  {
    "name": "An Attachment uses a \"length\" property exactly one time (Multiplicity, 4.1.11.table1.row5.c)",
    "type": "test"
  },
  {
    "name": "An Attachment uses a \"sha2\" property exactly one time (Multiplicity, 4.1.11.table1.row6.c)",
    "type": "test"
  },
  {
    "name": "An Attachment uses a \"fileUrl\" property at most one time (Multiplicity, 4.1.11.table1.row7.c)",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API, upon processing a successful GET request, will return a single \"statements\" property (Multiplicity, Format, 4.2.table1.row1.c)",
    "type": "test"
  },
  {
    "name": "A \"more\" property's referenced container object follows the same rules as the original GET request, originating with a single \"statements\" property and a single \"more\" property (4.2.table1.row1.b)",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API rejects with Error Code 400 Bad Request any DELETE request (7.2)",
    "type": "test"
  },
  {
    "name": "A POST request is defined as a \"pure\" POST, as opposed to a GET taking on the form of a POST (7.2.2.e)",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a GET Request which uses Attachments, has a \"Content-Type\" header with value \"application/json\", and has the \"attachments\" filter attribute set to \"true\" (4.1.11.a)",
    "type": "test"
  },
  {
    "name": "An LRS's Statement API will reject a GET request having the \"attachment\" parameter set to \"false\" and the Content-Type field in the header set to anything but \"application/json\" (7.2.3.d, 7.2.3.e)",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a \"Content Type\" header with value \"multipart/mixed\", and does not have a body header named \"MIME-Version\" with a value of \"1.0\" or greater (4.1.11.b, RFC 1341)",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a Request whose \"authority\" is a Group and consists of non-O-Auth Agents (4.1.9.a)",
    "type": "test"
  },
  {
    "name": "An LRS rejects a Statement of bad authorization (either authentication needed or failed credentials) with error code 401 Unauthorized (7.1)",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request any request to an API which uses a parameter not recognized by the LRS (7.0.a)",
    "type": "test"
  },
  {
    "name": "A GET request is defined as either a GET request or a POST request containing a GET request (7.2.3, 7.2.2.e)",
    "type": "test"
  },
  {
    "name": "An LRS doesn't make any adjustments to incoming Statements that are not specifically mentioned in this section (4.1.12.d, Varies)",
    "type": "suite"
  },
  {
    "name": "statement values should be the same",
    "type": "test"
  },
  {
    "name": "Conformance Requirements using Templating",
    "type": "suite"
  },
  {
    "name": "Activities Verify Templates",
    "type": "suite"
  },
  {
    "name": "should pass statement activity default template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement activity default template",
    "type": "test"
  },
  {
    "name": "should pass statement activity choice template",
    "type": "test"
  },
  {
    "name": "should pass statement activity likert template",
    "type": "test"
  },
  {
    "name": "should pass statement activity matching template",
    "type": "test"
  },
  {
    "name": "should pass statement activity performance template",
    "type": "test"
  },
  {
    "name": "should pass statement activity sequencing template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement activity choice template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement activity likert template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement activity matching template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement activity performance template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement activity sequencing template",
    "type": "test"
  },
  {
    "name": "An \"object\" property uses the \"id\" property exactly one time (Multiplicity, 4.1.4.1.table1.row2.b)",
    "type": "suite"
  },
  {
    "name": "statement activity \"id\" not provided",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"id\" not provided",
    "type": "test"
  },
  {
    "name": "An \"object\" property's \"id\" property is an IRI (Type, 4.1.4.1.table1.row2.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"id\" not IRI",
    "type": "test"
  },
  {
    "name": "statement activity \"id\" is IRI",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"id\" not IRI",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"id\" is IRI",
    "type": "test"
  },
  {
    "name": "An Activity Definition is defined as the contents of a \"definition\" property object of an Activity (Format, 4.1.4.1.table2)",
    "type": "suite"
  },
  {
    "name": "statement activity \"definition\" not object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"definition\" not object",
    "type": "test"
  },
  {
    "name": "An Activity's \"definition\" property is an Object (Type, 4.1.4.1.table1.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"definition\" not object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"definition\" not object",
    "type": "test"
  },
  {
    "name": "An Activity Definition contains at least one of the following properties: name, description, type, moreInfo, interactionType, or extensions (Format, 4.1.4.1.table2, 4.1.4.1.table3)",
    "type": "suite"
  },
  {
    "name": "statement activity \"definition\" missing all properties",
    "type": "test"
  },
  {
    "name": "statement activity \"definition\" contains \"name\"",
    "type": "test"
  },
  {
    "name": "statement activity \"definition\" contains \"description\"",
    "type": "test"
  },
  {
    "name": "statement activity \"definition\" contains \"type\"",
    "type": "test"
  },
  {
    "name": "statement activity \"definition\" contains \"moreInfo\"",
    "type": "test"
  },
  {
    "name": "statement activity \"definition\" contains \"extensions\"",
    "type": "test"
  },
  {
    "name": "statement activity \"definition\" contains \"interactionType\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"definition\" missing all properties",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"definition\" contains \"name\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"definition\" contains \"description\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"definition\" contains \"type\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"definition\" contains \"moreInfo\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"definition\" contains \"extensions\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"definition\" contains \"interactionType\"",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"name\" property is a Language Map (Type, 4.1.4.1.table2.row1.a)",
    "type": "suite"
  },
  {
    "name": "statement object \"name\" language map is numeric",
    "type": "test"
  },
  {
    "name": "statement object \"name\" language map is string",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"name\" language map is numeric",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"name\" language map is string",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"description\" property is a Language Map (Type, 4.1.4.1.table2.row2.a)",
    "type": "suite"
  },
  {
    "name": "statement object \"description\" language map is numeric",
    "type": "test"
  },
  {
    "name": "statement object \"description\" language map is string",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"description\" language map is numeric",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"description\" language map is string",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"type\" property is an IRI (Type, 4.1.4.1.table2.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"type\" not IRI",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"type\" not IRI",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"moreinfo\" property is an IRL (Type, 4.1.4.1.table2.row4.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"moreInfo\" not IRI",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"moreInfo\" not IRI",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"interactionType\" property is a String with a value of either “true-false”, “choice”, “fill-in”, “long-fill-in”, “matching”, “performance”, “sequencing”, “likert”, “numeric” or “other” (4.1.4.1.table3.row1.a, SCORM 2004 4th Edition RTE Book)",
    "type": "suite"
  },
  {
    "name": "statement activity \"interactionType\" can be used with \"true-false\"",
    "type": "test"
  },
  {
    "name": "statement activity \"interactionType\" can be used with \"choice\"",
    "type": "test"
  },
  {
    "name": "statement activity \"interactionType\" can be used with \"fill-in\"",
    "type": "test"
  },
  {
    "name": "statement activity \"interactionType\" can be used with \"long-fill-in\"",
    "type": "test"
  },
  {
    "name": "statement activity \"interactionType\" can be used with \"matching\"",
    "type": "test"
  },
  {
    "name": "statement activity \"interactionType\" can be used with \"performance\"",
    "type": "test"
  },
  {
    "name": "statement activity \"interactionType\" can be used with \"sequencing\"",
    "type": "test"
  },
  {
    "name": "statement activity \"interactionType\" can be used with \"likert\"",
    "type": "test"
  },
  {
    "name": "statement activity \"interactionType\" can be used with \"numeric\"",
    "type": "test"
  },
  {
    "name": "statement activity \"interactionType\" can be used with \"other\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"interactionType\" can be used with \"true-false\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"interactionType\" can be used with \"choice\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"interactionType\" can be used with \"fill-in\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"interactionType\" can be used with \"long-fill-in\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"interactionType\" can be used with \"matching\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"interactionType\" can be used with \"performance\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"interactionType\" can be used with \"sequencing\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"interactionType\" can be used with \"likert\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"interactionType\" can be used with \"numeric\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"interactionType\" can be used with \"other\"",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"correctResponsesPattern\" property is an array of Strings (4.1.4.1.table3.row2.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"correctResponsesPattern\" is an array of strings",
    "type": "test"
  },
  {
    "name": "statement activity \"correctResponsesPattern\" is an object",
    "type": "test"
  },
  {
    "name": "statement activity \"correctResponsesPattern\" is an array of object",
    "type": "test"
  },
  {
    "name": "statement activity \"correctResponsesPattern\" is an array of number",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"correctResponsesPattern\" is an array of strings",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"correctResponsesPattern\" is an object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"correctResponsesPattern\" is an array of object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"correctResponsesPattern\" is an array of number",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"choices\" property is an array of Interaction Components (4.1.4.1.table3.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"choices\" uses choice is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement activity \"choices\" uses choice is not an array",
    "type": "test"
  },
  {
    "name": "statement activity \"choices\" uses choice is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement activity \"choices\" uses choice is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement activity \"choices\" uses choice is an array of non description language",
    "type": "test"
  },
  {
    "name": "statement activity \"choices\" uses sequencing is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement activity \"choices\" uses sequencing is not an array",
    "type": "test"
  },
  {
    "name": "statement activity \"choices\" uses sequencing is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement activity \"choices\" uses sequencing is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement activity \"choices\" uses sequencing is an array of non description language",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choices\" uses choice is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choices\" uses choice is not an array",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choices\" uses choice is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choices\" uses choice is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choices\" uses choice is an array of non description language",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choices\" uses sequencing is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choices\" uses sequencing is not an array",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choices\" uses sequencing is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choices\" uses sequencing is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choices\" uses sequencing is an array of non description language",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"scale\" property is an array of Interaction Components (4.1.4.1.table3.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"scale\" uses likert is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement activity \"scale\" uses likert is not an array",
    "type": "test"
  },
  {
    "name": "statement activity \"scale\" uses likert is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement activity \"scale\" uses likert is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement activity \"scale\" uses likert is an array of non description language",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"scale\" uses likert is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"scale\" uses likert is not an array",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"scale\" uses likert is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"scale\" uses likert is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"scale\" uses likert is an array of non description language",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"source\" property is an array of Interaction Components (4.1.4.1.table3.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"source\" uses matching is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement activity \"source\" uses matching is not an array",
    "type": "test"
  },
  {
    "name": "statement activity \"source\" uses matching is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement activity \"source\" uses matching is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement activity \"source\" uses matching is an array of non description language",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"source\" uses matching is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"source\" uses matching is not an array",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"source\" uses matching is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"source\" uses matching is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"source\" uses matching is an array of non description language",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"target\" property is an array of Interaction Components (4.1.4.1.table3.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"target\" uses matching is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement activity \"target\" uses matching is not an array",
    "type": "test"
  },
  {
    "name": "statement activity \"target\" uses matching is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement activity \"target\" uses matching is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement activity \"target\" uses matching is an array of non description language",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"target\" uses matching is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"target\" uses matching is not an array",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"target\" uses matching is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"target\" uses matching is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"target\" uses matching is an array of non description language",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"steps\" property is an array of Interaction Components (4.1.4.1.table3.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"steps\" uses performance is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement activity \"steps\" uses performance is not an array",
    "type": "test"
  },
  {
    "name": "statement activity \"steps\" uses performance is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement activity \"steps\" uses performance is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement activity \"steps\" uses performance is an array of non description language",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"steps\" uses performance is an array of interaction components",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"steps\" uses performance is not an array",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"steps\" uses performance is an array of non string ID",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"steps\" uses performance is an array of non object description",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"steps\" uses performance is an array of non description language",
    "type": "test"
  },
  {
    "name": "An Interaction Component is an Object (4.1.4.1.table4)",
    "type": "suite"
  },
  {
    "name": "statement activity \"choice choices\" is not an object",
    "type": "test"
  },
  {
    "name": "statement activity \"likert scale\" is not an object",
    "type": "test"
  },
  {
    "name": "statement activity \"matching source\" is not an object",
    "type": "test"
  },
  {
    "name": "statement activity \"matching target\" is not an object",
    "type": "test"
  },
  {
    "name": "statement activity \"performance steps\" is not an object",
    "type": "test"
  },
  {
    "name": "statement activity \"sequencing choices\" is not an object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choice choices\" is not an object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"likert scale\" is not an object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"matching source\" is not an object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"matching target\" is not an object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"performance steps\" is not an object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"sequencing choices\" is not an object",
    "type": "test"
  },
  {
    "name": "Interaction Component contains an \"id\" property (Multiplicity, 4.1.4.1.table4.row1.b)",
    "type": "suite"
  },
  {
    "name": "statement activity \"choice choices\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement activity \"likert scale\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement activity \"matching source\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement activity \"matching target\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement activity \"performance steps\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement activity \"sequencing choices\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choice choices\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"likert scale\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"matching source\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"matching target\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"performance steps\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"sequencing choices\" missing \"id\"",
    "type": "test"
  },
  {
    "name": "An Interaction Component's \"id\" property is a String (Type, 4.1.4.1.table4.row1.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"choice choices id\" not a string",
    "type": "test"
  },
  {
    "name": "statement activity \"likert scale id\" not a string",
    "type": "test"
  },
  {
    "name": "statement activity \"matching source id\" not a string",
    "type": "test"
  },
  {
    "name": "statement activity \"matching target id\" not a string",
    "type": "test"
  },
  {
    "name": "statement activity \"performance steps id\" not a string",
    "type": "test"
  },
  {
    "name": "statement activity \"sequencing choices id\" not a string",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"choice choices id\" not a string",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"likert scale id\" not a string",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"matching source id\" not a string",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"matching target id\" not a string",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"performance steps id\" not a string",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"sequencing choices id\" not a string",
    "type": "test"
  },
  {
    "name": "Within an array of Interaction Components, the \"id\" property is unique (Multiplicty, 4.1.4.1.w)",
    "type": "suite"
  },
  {
    "name": "statement activity choice \"choices\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "statement activity likert \"scale\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "statement activity matching \"source\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "statement activity matching \"target\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "statement activity performance \"steps\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "statement activity sequencing \"choices\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity choice \"choices\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity likert \"scale\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity matching \"source\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity matching \"target\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity performance \"steps\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity sequencing \"choices\" cannot use same \"id\"",
    "type": "test"
  },
  {
    "name": "An Activity Definition's \"extension\" property is an Object (Type, 4.1.4.1.table2.row1.a)",
    "type": "suite"
  },
  {
    "name": "statement activity \"extension\" invalid string",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"extension\" invalid string",
    "type": "test"
  },
  {
    "name": "An LRS generates an \"objectType\" property of \"Activity\" to any \"object\" property if none is provided (Modify, 4.1.4.a)",
    "type": "suite"
  },
  {
    "name": "statement activity without \"objectType\" is valid",
    "type": "test"
  },
  {
    "name": "statement substatement activity without \"objectType\" is valid",
    "type": "test"
  },
  {
    "name": "An \"objectType\" property is a String (Type, 4.1.2.1.table1.row1.a)",
    "type": "suite"
  },
  {
    "name": "statement actor \"objectType\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement actor \"objectType\" should fail object",
    "type": "test"
  },
  {
    "name": "statement authority \"objectType\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement authority \"objectType\" should fail object",
    "type": "test"
  },
  {
    "name": "statement context instructor \"objectType\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement context instructor \"objectType\" should fail object",
    "type": "test"
  },
  {
    "name": "statement substatement as agent with \"objectType\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement substatement as agent with \"objectType\" should fail object",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"objectType\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"objectType\" should fail object",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"objectType\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"objectType\" should fail object",
    "type": "test"
  },
  {
    "name": "A \"name\" property is a String (Type, 4.1.2.1.table1.row2.a)",
    "type": "suite"
  },
  {
    "name": "statement actor \"name\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement actor \"name\" should fail object",
    "type": "test"
  },
  {
    "name": "statement authority \"name\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement authority \"name\" should fail object",
    "type": "test"
  },
  {
    "name": "statement context instructor \"name\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement context instructor \"name\" should fail object",
    "type": "test"
  },
  {
    "name": "statement substatement as agent with \"name\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement substatement as agent with \"name\" should fail object",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"name\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"name\" should fail object",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"name\" should fail numeric",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"name\" should fail object",
    "type": "test"
  },
  {
    "name": "An \"actor\" property with \"objectType\" as \"Agent\" uses one of the following properties: \"mbox\", \"mbox_sha1sum\", \"openid\", \"account\" (Multiplicity, 4.1.2.1.a)",
    "type": "suite"
  },
  {
    "name": "statement actor without \"account\", \"mbox\", \"mbox_sha1sum\", \"openid\" should fail",
    "type": "test"
  },
  {
    "name": "statement actor \"account\" should pass",
    "type": "test"
  },
  {
    "name": "statement actor \"mbox\" should pass",
    "type": "test"
  },
  {
    "name": "statement actor \"mbox_sha1sum\" should pass",
    "type": "test"
  },
  {
    "name": "statement actor \"openid\" should pass",
    "type": "test"
  },
  {
    "name": "statement authority without \"account\", \"mbox\", \"mbox_sha1sum\", \"openid\" should fail",
    "type": "test"
  },
  {
    "name": "statement authority \"account\" should pass",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox\" should pass",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox_sha1sum\" should pass",
    "type": "test"
  },
  {
    "name": "statement authority \"openid\" should pass",
    "type": "test"
  },
  {
    "name": "statement context instructor without \"account\", \"mbox\", \"mbox_sha1sum\", \"openid\" should fail",
    "type": "test"
  },
  {
    "name": "statement context instructor \"account\" should pass",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox\" should pass",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox_sha1sum\" should pass",
    "type": "test"
  },
  {
    "name": "statement context instructor \"openid\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement as agent without \"account\", \"mbox\", \"mbox_sha1sum\", \"openid\" should fail",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"account\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"mbox\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"mbox_sha1sum\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"openid\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent without \"account\", \"mbox\", \"mbox_sha1sum\", \"openid\" should fail",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"account\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox_sha1sum\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"openid\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor without \"account\", \"mbox\", \"mbox_sha1sum\", \"openid\" should fail",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"account\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox_sha1sum\" should pass",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"openid\" should pass",
    "type": "test"
  },
  {
    "name": "An \"mbox\" property is an IRI (Type, 4.1.2.3.table1.row1.a)",
    "type": "suite"
  },
  {
    "name": "statement actor \"agent mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement actor \"group mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement authority \"agent mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement authority \"group mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement context instructor \"agent mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement context instructor \"group mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement context team \"group mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement substatement as \"agent mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement substatement as \"group mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"agent mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"group mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"agent mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"group mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"group mbox\" not IRI",
    "type": "test"
  },
  {
    "name": "An \"mbox\" property has the form \"mailto:email address\" (Syntax, 4.1.2.3.table1.row1.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"agent mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement actor \"group mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement authority \"agent mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement authority \"group mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement context instructor \"agent mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement context instructor \"group mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement context team \"group mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement substatement as \"agent mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement substatement as \"group mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"agent mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"group mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"agent mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"group mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"group mbox\" not mailto:email address",
    "type": "test"
  },
  {
    "name": "An \"mbox_sha1sum\" property is a String (Type, 4.1.2.3.table1.row2.a)",
    "type": "suite"
  },
  {
    "name": "statement actor \"agent mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement actor \"group mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement authority \"agent mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement authority \"group mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement context instructor \"agent mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement context instructor \"group mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement context team \"group mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement substatement as \"agent mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement substatement as \"group mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"agent mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"group mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"agent mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"group mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"group mbox_sha1sum\" not string",
    "type": "test"
  },
  {
    "name": "An \"openid\" property is a URI (Type, 4.1.2.3.table1.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement actor \"agent openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement actor \"group openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement authority \"agent openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement authority \"group openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement context instructor \"agent openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement context instructor \"group openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement context team \"group openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement substatement as \"agent openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement substatement as \"group openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"agent openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"group openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"agent openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"group openid\" not URI",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"group openid\" not URI",
    "type": "test"
  },
  {
    "name": "An Account Object is the \"account\" property of a Group or Agent (Definition, 4.1.2.4)",
    "type": "suite"
  },
  {
    "name": "statement actor \"agent account\" property exists",
    "type": "test"
  },
  {
    "name": "statement actor \"group account\" property exists",
    "type": "test"
  },
  {
    "name": "statement authority \"agent account\" property exists",
    "type": "test"
  },
  {
    "name": "statement authority \"group account\" property exists",
    "type": "test"
  },
  {
    "name": "statement context instructor \"agent account\" property exists",
    "type": "test"
  },
  {
    "name": "statement context instructor \"group account\" property exists",
    "type": "test"
  },
  {
    "name": "statement context team \"group account\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement as \"agent account\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement as \"group account\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"agent account\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"group account\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"agent account\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"group account\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"group account\" property exists",
    "type": "test"
  },
  {
    "name": "An Account Object uses the \"homePage\" property (Multiplicity, 4.1.2.4.table1.row1.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"agent\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement actor \"group\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement authority \"agent\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement authority \"group\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement context instructor \"agent\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement context instructor \"group\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement context team \"group\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement as \"agent\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement as \"group\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"agent\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"group\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"agent\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"group\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"group\" account \"homePage\" property exists",
    "type": "test"
  },
  {
    "name": "An Account Object's \"homePage\" property is an IRL (Type, 4.1.2.4.table1.row1.a)",
    "type": "suite"
  },
  {
    "name": "statement actor \"agent\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement actor \"group\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement authority \"agent\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement authority \"group\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement context instructor \"agent\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement context instructor \"group\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement context team \"group\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement substatement as \"agent\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement substatement as \"group\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"agent\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"group\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"agent\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"group\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"group\" account \"homePage property is IRL",
    "type": "test"
  },
  {
    "name": "An Account Object uses the \"name\" property (Multiplicity, 4.1.2.4.table1.row2.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"agent\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement actor \"group\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement authority \"agent\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement authority \"group\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement context instructor \"agent\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement context instructor \"group\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement context team \"group\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement as \"agent\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement as \"group\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"agent\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"group\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"agent\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"group\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"group\" account \"name\" property exists",
    "type": "test"
  },
  {
    "name": "An Account Object \"name\" property is a String (Type, 4.1.2.4.table1.row1.a)",
    "type": "suite"
  },
  {
    "name": "statement actor \"agent\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement actor \"group\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement authority \"agent\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement authority \"group\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement context instructor \"agent\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement context instructor \"group\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement context team \"group\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement substatement as \"agent\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement substatement as \"group\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"agent\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement substatement\"s \"group\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"agent\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"group\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"group\" account \"name\" property is string",
    "type": "test"
  },
  {
    "name": "Agents Verify Templates",
    "type": "suite"
  },
  {
    "name": "should pass statement actor template",
    "type": "test"
  },
  {
    "name": "should pass statement authority template",
    "type": "test"
  },
  {
    "name": "should pass statement context instructor template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement as agent template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement\"s agent template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement\"s context instructor template",
    "type": "test"
  },
  {
    "name": "An \"actor\" property's \"objectType\" property is either \"Agent\" or \"Group\" (Vocabulary, 4.1.2.1.table1.row1.b, 4.1.2.1.table1.row1.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"objectType\" should fail when not \"Agent\"",
    "type": "test"
  },
  {
    "name": "statement actor \"objectType\" should fail when not \"Group\"",
    "type": "test"
  },
  {
    "name": "statement authority \"objectType\" should fail when not \"Agent\"",
    "type": "test"
  },
  {
    "name": "statement authority \"objectType\" should fail when not \"Group\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"objectType\" should fail when not \"Agent\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"objectType\" should fail when not \"Group\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent with \"objectType\" should fail when not \"Agent\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group with \"objectType\" should fail when not \"Group\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s actor \"objectType\" should fail when not \"Agent\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s actor \"objectType\" should fail when not \"Group\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"objectType\" should fail when not \"Agent\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"objectType\" should fail when not \"Group\"",
    "type": "test"
  },
  {
    "name": "An Agent is defined by \"objectType\" of an \"actor\" property or \"object\" property with value \"Agent\" (4.1.2.1.table1.row1, 4.1.4.2.a)",
    "type": "suite"
  },
  {
    "name": "statement actor does not require objectType",
    "type": "test"
  },
  {
    "name": "statement actor \"objectType\" accepts \"Agent\"",
    "type": "test"
  },
  {
    "name": "statement authority \"objectType\" accepts \"Agent\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"objectType\" accepts \"Agent\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"objectType\" accepts \"Agent\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"objectType\" accepts \"Agent\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"objectType\" accepts \"Agent\"",
    "type": "test"
  },
  {
    "name": "An Agent does not use the \"mbox\" property if \"mbox_sha1sum\", \"openid\", or \"account\" are used (Multiplicity, 4.1.2.1.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement actor \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement actor \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "An Agent does not use the \"mbox_sha1sum\" property if \"mbox\", \"openid\", or \"account\" are used (Multiplicity, 4.1.2.1.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement actor \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement actor \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "An Agent does not use the \"account\" property if \"mbox\", \"mbox_sha1sum\", or \"openid\" are used (Multiplicity, 4.1.2.1.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement actor \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement actor \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement authority \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement authority \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement authority \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "An Agent does not use the \"openid\" property if \"mbox\", \"mbox_sha1sum\", or \"account\" are used (Multiplicity, 4.1.2.1.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement actor \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement actor \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement authority \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement authority \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement authority \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement as agent \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "A Statement's \"attachments\" property is an array of Attachments (4.1.2.1.table1.row11.a)",
    "type": "suite"
  },
  {
    "name": "statement \"attachments\" not an array",
    "type": "test"
  },
  {
    "name": "An Attachment is an Object (Definition, 4.1.11)",
    "type": "suite"
  },
  {
    "name": "statement \"attachment\" invalid numeric",
    "type": "test"
  },
  {
    "name": "statement \"attachment\" invalid string",
    "type": "test"
  },
  {
    "name": "A \"usageType\" property is an IRI (Multiplicity, 4.1.11.table1.row1.b)",
    "type": "suite"
  },
  {
    "name": "statement \"usageType\" invalid string",
    "type": "test"
  },
  {
    "name": "A \"contentType\" property is an Internet Media/MIME type (Format, 4.1.11.table1.row4.a, IETF.org)",
    "type": "suite"
  },
  {
    "name": "statement \"contentType\" invalid string",
    "type": "test"
  },
  {
    "name": "A \"length\" property is an Integer (Format, 4.1.11.table1.row5.a)",
    "type": "suite"
  },
  {
    "name": "statement \"length\" invalid string",
    "type": "test"
  },
  {
    "name": "A \"sha2\" property is a String (Format, 4.1.11.table1.row6.a)",
    "type": "suite"
  },
  {
    "name": "statement \"sha2\" invalid string",
    "type": "test"
  },
  {
    "name": "A \"fileUrl\" property is an IRL (Format, 4.1.11.table1.row7.a)",
    "type": "suite"
  },
  {
    "name": "statement \"fileUrl\" invalid string",
    "type": "test"
  },
  {
    "name": "A \"display\" property is a Language Map (Type, 4.1.3.table1.row1.a, 4.1.11.table1.row2.a)",
    "type": "suite"
  },
  {
    "name": "statement attachment \"description\" language map numeric",
    "type": "test"
  },
  {
    "name": "statement attachment \"description\" language map string",
    "type": "test"
  },
  {
    "name": "An \"authority\" property is an Agent or Group (Type, 4.1.2.1.table1.row9.a, 4.1.2.1.table1.row9.b, 4.1.9.a)",
    "type": "suite"
  },
  {
    "name": "should pass statement authority agent template",
    "type": "test"
  },
  {
    "name": "should pass statement authority template",
    "type": "test"
  },
  {
    "name": "should fail statement authority identified group (mbox)",
    "type": "test"
  },
  {
    "name": "should fail statement authority identified group (mbox_sha1sum)",
    "type": "test"
  },
  {
    "name": "should fail statement authority identified group (openid)",
    "type": "test"
  },
  {
    "name": "should fail statement authority identified group (account)",
    "type": "test"
  },
  {
    "name": "An \"authority\" property which is also a Group contains exactly two Agents (Type, 4.1.2.1.table1.row9.a, 4.1.2.1.table1.row9.b, 4.1.9.a)",
    "type": "suite"
  },
  {
    "name": "statement \"authority\" invalid one member",
    "type": "test"
  },
  {
    "name": "statement \"authority\" invalid three member",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a Request whose \"authority\" is a Group of more than two Agents (Format, 4.1.9.a)",
    "type": "suite"
  },
  {
    "name": "statement \"authority\" invalid three member",
    "type": "test"
  },
  {
    "name": "Contexts Verify Templates",
    "type": "suite"
  },
  {
    "name": "should pass statement context template",
    "type": "test"
  },
  {
    "name": "should pass substatement context template",
    "type": "test"
  },
  {
    "name": "A \"registration\" property is a UUID (Type, 4.1.6.table1.row1.a)",
    "type": "suite"
  },
  {
    "name": "statement context \"registration\" is object",
    "type": "test"
  },
  {
    "name": "statement context \"registration\" is string",
    "type": "test"
  },
  {
    "name": "statement substatement context \"registration\" is object",
    "type": "test"
  },
  {
    "name": "statement substatement context \"registration\" is string",
    "type": "test"
  },
  {
    "name": "An \"instructor\" property is an Agent (Type, 4.1.6.table1.row2.a)",
    "type": "suite"
  },
  {
    "name": "statement context \"instructor\" is object",
    "type": "test"
  },
  {
    "name": "statement context \"instructor\" is string",
    "type": "test"
  },
  {
    "name": "statement substatement context \"instructor\" is object",
    "type": "test"
  },
  {
    "name": "statement substatement context \"instructor\" is string",
    "type": "test"
  },
  {
    "name": "An \"team\" property is a Group (Type, 4.1.6.table1.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement context \"team\" is agent",
    "type": "test"
  },
  {
    "name": "statement context \"team\" is object",
    "type": "test"
  },
  {
    "name": "statement context \"team\" is string",
    "type": "test"
  },
  {
    "name": "statement substatement context \"team\" is agent",
    "type": "test"
  },
  {
    "name": "statement substatement context \"team\" is object",
    "type": "test"
  },
  {
    "name": "statement substatement context \"team\" is string",
    "type": "test"
  },
  {
    "name": "A \"contextActivities\" property is an Object (Type, 4.1.5.table1.row4.a)",
    "type": "suite"
  },
  {
    "name": "statement context \"contextActivities\" is string",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities\" is string",
    "type": "test"
  },
  {
    "name": "A \"contextActivities\" property contains one or more key/value pairs (Format, 4.1.a, 4.1.6.2.b)",
    "type": "suite"
  },
  {
    "name": "statement context \"contextActivities\" is empty",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities\" is empty",
    "type": "test"
  },
  {
    "name": "A \"contextActivities\" property's \"key\" has a value of \"parent\", \"grouping\", \"category\", or \"other\" (Format, 4.1.6.2.a)",
    "type": "suite"
  },
  {
    "name": "statement context \"contextActivities\" is \"parent\"",
    "type": "test"
  },
  {
    "name": "statement context \"contextActivities\" is \"grouping\"",
    "type": "test"
  },
  {
    "name": "statement context \"contextActivities\" is \"category\"",
    "type": "test"
  },
  {
    "name": "statement context \"contextActivities\" is \"other\"",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities\" is \"parent\"",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities\" is \"grouping\"",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities\" is \"category\"",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities\" is \"other\"",
    "type": "test"
  },
  {
    "name": "A \"contextActivities\" property's \"value\" is an Activity (Format, 4.1.6.2.a)",
    "type": "suite"
  },
  {
    "name": "statement context \"contextActivities parent\" value is activity array",
    "type": "test"
  },
  {
    "name": "statement context \"contextActivities grouping\" value is activity array",
    "type": "test"
  },
  {
    "name": "statement context \"contextActivities category\" value is activity array",
    "type": "test"
  },
  {
    "name": "statement context \"contextActivities other\" value is activity array",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities parent\" value is activity array",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities grouping\" value is activity array",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities category\" value is activity array",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities other\" value is activity array",
    "type": "test"
  },
  {
    "name": "A ContextActivity is defined as a single Activity of the \"value\" of the \"contextActivities\" property (definition)",
    "type": "suite"
  },
  {
    "name": "statement context \"contextActivities parent\" value is activity",
    "type": "test"
  },
  {
    "name": "statement context \"contextActivities grouping\" value is activity",
    "type": "test"
  },
  {
    "name": "statement context \"contextActivities category\" value is activity",
    "type": "test"
  },
  {
    "name": "statement context \"contextActivities other\" value is activity",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities parent\" value is activity",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities grouping\" value is activity",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities category\" value is activity",
    "type": "test"
  },
  {
    "name": "statement substatement context \"contextActivities other\" value is activity",
    "type": "test"
  },
  {
    "name": "A \"revision\" property is a String (Type, 4.1.6.table1.row5.a)",
    "type": "suite"
  },
  {
    "name": "statement context \"revision\" is numeric",
    "type": "test"
  },
  {
    "name": "statement context \"revision\" is object",
    "type": "test"
  },
  {
    "name": "statement substatement context \"revision\" is numeric",
    "type": "test"
  },
  {
    "name": "statement substatement context \"revision\" is object",
    "type": "test"
  },
  {
    "name": "A Statement cannot contain both a \"revision\" property in its \"context\" property and have the value of the \"object\" property's \"objectType\" be anything but \"Activity\" (4.1.6.a)",
    "type": "suite"
  },
  {
    "name": "statement context \"revision\" is invalid with object agent",
    "type": "test"
  },
  {
    "name": "statement context \"revision\" is invalid with object group",
    "type": "test"
  },
  {
    "name": "statement context \"revision\" is invalid with statementref",
    "type": "test"
  },
  {
    "name": "statement context \"revision\" is invalid with substatement",
    "type": "test"
  },
  {
    "name": "statement substatement context \"revision\" is invalid with object agent",
    "type": "test"
  },
  {
    "name": "statement substatement context \"revision\" is invalid with object group",
    "type": "test"
  },
  {
    "name": "statement substatement context \"revision\" is invalid with statementref",
    "type": "test"
  },
  {
    "name": "A \"platform\" property is a String (Type, 4.1.6.table1.row6.a)",
    "type": "suite"
  },
  {
    "name": "statement context \"platform\" is numeric",
    "type": "test"
  },
  {
    "name": "statement context \"platform\" is object",
    "type": "test"
  },
  {
    "name": "statement substatement context \"platform\" is numeric",
    "type": "test"
  },
  {
    "name": "statement substatement context \"platform\" is object",
    "type": "test"
  },
  {
    "name": "A Statement cannot contain both a \"platform\" property in its \"context\" property and have the value of the \"object\" property's \"objectType\" be anything but \"Activity\" (4.1.6.b)",
    "type": "suite"
  },
  {
    "name": "statement context \"platform\" is invalid with object agent",
    "type": "test"
  },
  {
    "name": "statement context \"platform\" is invalid with object group",
    "type": "test"
  },
  {
    "name": "statement context \"platform\" is invalid with statementref",
    "type": "test"
  },
  {
    "name": "statement context \"platform\" is invalid with substatement",
    "type": "test"
  },
  {
    "name": "statement substatement context \"platform\" is invalid with object agent",
    "type": "test"
  },
  {
    "name": "statement substatement context \"platform\" is invalid with object group",
    "type": "test"
  },
  {
    "name": "statement substatement context \"platform\" is invalid with statementref",
    "type": "test"
  },
  {
    "name": "A \"language\" property is a String (Type, 4.1.6.table1.row7.a)",
    "type": "suite"
  },
  {
    "name": "statement context \"language\" is numeric",
    "type": "test"
  },
  {
    "name": "statement context \"language\" is object",
    "type": "test"
  },
  {
    "name": "statement substatement context \"language\" is numeric",
    "type": "test"
  },
  {
    "name": "statement substatement context \"language\" is object",
    "type": "test"
  },
  {
    "name": "A \"language\" property follows RFC5646 (Format, 4.1.6.table1.row7.a, RFC5646)",
    "type": "suite"
  },
  {
    "name": "statement context \"language\" is is invalid language",
    "type": "test"
  },
  {
    "name": "statement substatement context \"language\" is is invalid language",
    "type": "test"
  },
  {
    "name": "A \"statement\" property is a Statement Reference (Type, 4.1.6.table1.row8.a)",
    "type": "suite"
  },
  {
    "name": "statement context \"statement\" invalid with \"statementref\"",
    "type": "test"
  },
  {
    "name": "statement context \"statement\" invalid with \"id\" not UUID",
    "type": "test"
  },
  {
    "name": "statement substatement context \"statement\" invalid with \"statementref\"",
    "type": "test"
  },
  {
    "name": "statement substatement context \"statement\" invalid with \"id\" not UUID",
    "type": "test"
  },
  {
    "name": "An Extension is defined as an Object of any \"extensions\" property (Multiplicity, 5.3)",
    "type": "suite"
  },
  {
    "name": "statement activity extensions valid boolean",
    "type": "test"
  },
  {
    "name": "statement activity extensions valid numeric",
    "type": "test"
  },
  {
    "name": "statement activity extensions valid object",
    "type": "test"
  },
  {
    "name": "statement activity extensions valid string",
    "type": "test"
  },
  {
    "name": "statement result extensions valid boolean",
    "type": "test"
  },
  {
    "name": "statement result extensions valid numeric",
    "type": "test"
  },
  {
    "name": "statement result extensions valid object",
    "type": "test"
  },
  {
    "name": "statement result extensions valid string",
    "type": "test"
  },
  {
    "name": "statement context extensions valid boolean",
    "type": "test"
  },
  {
    "name": "statement context extensions valid numeric",
    "type": "test"
  },
  {
    "name": "statement context extensions valid object",
    "type": "test"
  },
  {
    "name": "statement context extensions valid string",
    "type": "test"
  },
  {
    "name": "statement substatement activity extensions valid boolean",
    "type": "test"
  },
  {
    "name": "statement substatement activity extensions valid numeric",
    "type": "test"
  },
  {
    "name": "statement substatement activity extensions valid object",
    "type": "test"
  },
  {
    "name": "statement substatement activity extensions valid string",
    "type": "test"
  },
  {
    "name": "statement substatement result extensions valid boolean",
    "type": "test"
  },
  {
    "name": "statement substatement result extensions valid numeric",
    "type": "test"
  },
  {
    "name": "statement substatement result extensions valid object",
    "type": "test"
  },
  {
    "name": "statement substatement result extensions valid string",
    "type": "test"
  },
  {
    "name": "statement substatement context extensions valid boolean",
    "type": "test"
  },
  {
    "name": "statement substatement context extensions valid numeric",
    "type": "test"
  },
  {
    "name": "statement substatement context extensions valid object",
    "type": "test"
  },
  {
    "name": "statement substatement context extensions valid string",
    "type": "test"
  },
  {
    "name": "An Extension can be empty (Format, 5.3)",
    "type": "suite"
  },
  {
    "name": "statement activity extensions can be empty",
    "type": "test"
  },
  {
    "name": "statement result extensions can be empty",
    "type": "test"
  },
  {
    "name": "statement context extensions can be empty",
    "type": "test"
  },
  {
    "name": "statement substatement activity extensions can be empty",
    "type": "test"
  },
  {
    "name": "statement substatement result extensions can be empty",
    "type": "test"
  },
  {
    "name": "statement substatement context extensions can be empty",
    "type": "test"
  },
  {
    "name": "An Extension \"key\" is an IRI (Format, 5.3.a)",
    "type": "suite"
  },
  {
    "name": "statement activity extensions key is not an IRI",
    "type": "test"
  },
  {
    "name": "statement result extensions key is not an IRI",
    "type": "test"
  },
  {
    "name": "statement context extensions key is not an IRI",
    "type": "test"
  },
  {
    "name": "statement substatement activity extensions key is not an IRI",
    "type": "test"
  },
  {
    "name": "statement substatement result extensions key is not an IRI",
    "type": "test"
  },
  {
    "name": "statement substatement context extensions key is not an IRI",
    "type": "test"
  },
  {
    "name": "Groups Verify Templates",
    "type": "suite"
  },
  {
    "name": "should pass statement actor template",
    "type": "test"
  },
  {
    "name": "should pass statement authority template",
    "type": "test"
  },
  {
    "name": "should pass statement context instructor template",
    "type": "test"
  },
  {
    "name": "should pass statement context team template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement as group template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement\"s group template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement\"s context instructor template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement\"s context team template",
    "type": "test"
  },
  {
    "name": "A Group is defined by \"objectType\" of an \"actor\" property or \"object\" property with value \"Group\" (4.1.2.2.table1.row2, 4.1.4.2.a)",
    "type": "suite"
  },
  {
    "name": "statement actor \"objectType\" accepts \"Group\"",
    "type": "test"
  },
  {
    "name": "statement authority \"objectType\" accepts \"Group\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"objectType\" accepts \"Group\"",
    "type": "test"
  },
  {
    "name": "statement context team \"objectType\" accepts \"Group\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"objectType\" accepts \"Group\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group \"objectType\" accepts \"Group\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"objectType\" accepts \"Group\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"objectType\" accepts \"Group\"",
    "type": "test"
  },
  {
    "name": "An Anonymous Group is defined by \"objectType\" of an \"actor\" or \"object\" with value \"Group\" and by none of \"mbox\", \"mbox_sha1sum\", \"openid\", or \"account\" being used (4.1.2.2.table1.row2, 4.1.2.2.table1)",
    "type": "suite"
  },
  {
    "name": "statement actor does not require functional identifier",
    "type": "test"
  },
  {
    "name": "statement authority does not require functional identifier",
    "type": "test"
  },
  {
    "name": "statement context instructor does not require functional identifier",
    "type": "test"
  },
  {
    "name": "statement context team does not require functional identifier",
    "type": "test"
  },
  {
    "name": "statement substatement as group does not require functional identifier",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group does not require functional identifier",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor does not require functional identifier",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team does not require functional identifier",
    "type": "test"
  },
  {
    "name": "An Anonymous Group uses the \"member\" property (Multiplicity, 4.1.2.2.table1.row3.b)",
    "type": "suite"
  },
  {
    "name": "statement actor anonymous group missing member",
    "type": "test"
  },
  {
    "name": "statement authority anonymous group missing member",
    "type": "test"
  },
  {
    "name": "statement context instructor anonymous group missing member",
    "type": "test"
  },
  {
    "name": "statement context team anonymous group missing member",
    "type": "test"
  },
  {
    "name": "statement substatement as group anonymous group missing member",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group anonymous group missing member",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor anonymous group missing member",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team anonymous group missing member",
    "type": "test"
  },
  {
    "name": "The \"member\" property is an array of Objects following Agent requirements (4.1.2.2.table1.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement actor requires member type \"array\"",
    "type": "test"
  },
  {
    "name": "statement authority requires member type \"array\"",
    "type": "test"
  },
  {
    "name": "statement context instructor requires member type \"array\"",
    "type": "test"
  },
  {
    "name": "statement context team requires member type \"array\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group requires member type \"array\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group requires member type \"array\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor requires member type \"array\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team requires member type \"array\"",
    "type": "test"
  },
  {
    "name": "Statement authority shall only be an anonymous group with two members",
    "type": "suite"
  },
  {
    "name": "statement authority identified group is rejected",
    "type": "test"
  },
  {
    "name": "statement authority anonymous group with two members is accepted",
    "type": "test"
  },
  {
    "name": "statement authority anonymous group without two members is rejected",
    "type": "test"
  },
  {
    "name": "An Identified Group is defined by \"objectType\" of an \"actor\" or \"object\" with value \"Group\" and by one of \"mbox\", \"mbox_sha1sum\", \"openid\", or \"account\" being used (4.1.2.2.table1.row2, 4.1.2.2.table2)",
    "type": "suite"
  },
  {
    "name": "statement actor identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement actor identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement actor identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement actor identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement context instructor identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context instructor identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context instructor identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context instructor identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement context team identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context team identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context team identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context team identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "An Identified Group uses one of the following properties: \"mbox\", \"mbox_sha1sum\", \"openid\", \"account\" (Multiplicity, 4.1.2.1.a)",
    "type": "suite"
  },
  {
    "name": "statement actor identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement actor identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement actor identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement actor identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement context instructor identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context instructor identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context instructor identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context instructor identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement context team identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context team identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context team identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context team identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s group identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team identified group accepts \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team identified group accepts \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team identified group accepts \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team identified group accepts \"account\"",
    "type": "test"
  },
  {
    "name": "An Identified Group does not use the \"mbox\" property if \"mbox_sha1sum\", \"openid\", or \"account\" are used (Multiplicity, 4.1.2.1.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement actor \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement actor \"mbox\" cannot be used with \"openid",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context team \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement context team \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context team \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"mbox\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"mbox\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"mbox\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "An Identified Group does not use the \"mbox_sha1sum\" property if \"mbox\", \"openid\", or \"account\" are used (Multiplicity, 4.1.2.1.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement actor \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement actor \"mbox_sha1sum\" cannot be used with \"openid",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement authority \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context team \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context team \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context team \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"mbox_sha1sum\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"mbox_sha1sum\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"mbox_sha1sum\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "An Identified Group does not use the \"openid\" property if \"mbox\", \"mbox_sha1sum\", or \"account\" are used (Multiplicity, 4.1.2.1.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"openid\" cannot be used with \"account",
    "type": "test"
  },
  {
    "name": "statement actor \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement actor \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement authority \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement authority \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement authority \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context team \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement context team \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context team \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"openid\" cannot be used with \"account\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"openid\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"openid\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "An Identified Group does not use the \"account\" property if \"mbox\", \"mbox_sha1sum\", or \"openid\" are used (Multiplicity, 4.1.2.1.b)",
    "type": "suite"
  },
  {
    "name": "statement actor \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement actor \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement actor \"account\" cannot be used with \"openid",
    "type": "test"
  },
  {
    "name": "statement authority \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement authority \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement authority \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context instructor \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement context team \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement context team \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement context team \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement as group \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s agent \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context instructor \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"account\" cannot be used with \"mbox\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"account\" cannot be used with \"mbox_sha1sum\"",
    "type": "test"
  },
  {
    "name": "statement substatement\"s context team \"account\" cannot be used with \"openid\"",
    "type": "test"
  },
  {
    "name": "Languages Verify Templates",
    "type": "suite"
  },
  {
    "name": "should pass statement verb template",
    "type": "test"
  },
  {
    "name": "should pass statement object template",
    "type": "test"
  },
  {
    "name": "should pass statement attachment template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement verb template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement object template",
    "type": "test"
  },
  {
    "name": "A Language Map is defined as an array of language tag/String pairs has at least 1 entry",
    "type": "suite"
  },
  {
    "name": "statement verb \"display\" language map needs one entry",
    "type": "test"
  },
  {
    "name": "statement verb \"display\" language map must be object",
    "type": "test"
  },
  {
    "name": "statement object \"name\" language map needs one entry",
    "type": "test"
  },
  {
    "name": "statement object \"name\" language map must be object",
    "type": "test"
  },
  {
    "name": "statement object \"description\" language map needs one entry",
    "type": "test"
  },
  {
    "name": "statement object \"description\" language map must be object",
    "type": "test"
  },
  {
    "name": "statement attachment \"display\" language map needs one entry",
    "type": "test"
  },
  {
    "name": "statement attachment \"display\" language map must be object",
    "type": "test"
  },
  {
    "name": "statement attachment \"description\" language map needs one entry",
    "type": "test"
  },
  {
    "name": "statement attachment \"description\" language map must be object",
    "type": "test"
  },
  {
    "name": "statement substatement verb \"display\" language map needs one entry",
    "type": "test"
  },
  {
    "name": "statement substatement verb \"display\" language map must be object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"name\" language map needs one entry",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"name\" language map must be object",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"description\" language map needs one entry",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"description\" language map must be object",
    "type": "test"
  },
  {
    "name": "A Language Map follows RFC5646 (Format, 5.2.a, RFC5646)",
    "type": "suite"
  },
  {
    "name": "statement verb \"display\" language map invalid",
    "type": "test"
  },
  {
    "name": "statement object \"name\" language map invalid",
    "type": "test"
  },
  {
    "name": "statement object \"description\" language map invalid",
    "type": "test"
  },
  {
    "name": "statement attachment \"display\" language map invalid",
    "type": "test"
  },
  {
    "name": "statement attachment \"description\" language map invalid",
    "type": "test"
  },
  {
    "name": "statement substatement verb \"display\" language map invalid",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"name\" language map invalid",
    "type": "test"
  },
  {
    "name": "statement substatement activity \"description\" language map invalid",
    "type": "test"
  },
  {
    "name": "Objects Verify Templates",
    "type": "suite"
  },
  {
    "name": "should pass statement activity template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement activity template",
    "type": "test"
  },
  {
    "name": "should pass statement agent template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement agent template",
    "type": "test"
  },
  {
    "name": "should pass statement group template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement group template",
    "type": "test"
  },
  {
    "name": "should pass statement StatementRef template",
    "type": "test"
  },
  {
    "name": "should pass statement substatement StatementRef template",
    "type": "test"
  },
  {
    "name": "should pass statement SubStatement template",
    "type": "test"
  },
  {
    "name": "An \"object\" property's \"objectType\" property is either \"Activity\", \"Agent\", \"Group\", \"SubStatement\", or \"StatementRef\" (Vocabulary, 4.1.4.b)",
    "type": "suite"
  },
  {
    "name": "statement activity should fail on \"activity\"",
    "type": "test"
  },
  {
    "name": "statement substatement activity should fail on \"activity\"",
    "type": "test"
  },
  {
    "name": "statement agent template should fail on \"agent\"",
    "type": "test"
  },
  {
    "name": "statement substatement agent should fail on \"agent\"",
    "type": "test"
  },
  {
    "name": "statement group should fail on \"group\"",
    "type": "test"
  },
  {
    "name": "statement substatement group should fail on \"group\"",
    "type": "test"
  },
  {
    "name": "statement StatementRef should fail on \"statementref\"",
    "type": "test"
  },
  {
    "name": "statement substatement StatementRef should fail on \"statementref\"",
    "type": "test"
  },
  {
    "name": "statement SubStatement should fail on \"substatement\"",
    "type": "test"
  },
  {
    "name": "Results Verify Templates",
    "type": "suite"
  },
  {
    "name": "should pass statement result template",
    "type": "test"
  },
  {
    "name": "should pass substatement result template",
    "type": "test"
  },
  {
    "name": "A \"score\" property is an Object (Type, 4.1.5.table.row1.a)",
    "type": "suite"
  },
  {
    "name": "statement result score numeric",
    "type": "test"
  },
  {
    "name": "statement result score string",
    "type": "test"
  },
  {
    "name": "statement substatement result score numeric",
    "type": "test"
  },
  {
    "name": "statement substatement result score string",
    "type": "test"
  },
  {
    "name": "A \"score\" Object's \"scaled\" property is a Decimal accurate to seven significant decimal figures (Type, 4.1.5.1.table1.row1.a, SCORM 2004 4Ed)",
    "type": "suite"
  },
  {
    "name": "statement result \"scaled\" accepts seven significant decimal",
    "type": "test"
  },
  {
    "name": "statement substatement result \"scaled\" accepts seven significant decimal",
    "type": "test"
  },
  {
    "name": "A \"score\" Object's \"raw\" property is a Decimal accurate to seven significant decimal figures (Type, 4.1.5.1.table1.row2.a, SCORM 2004 4Ed)",
    "type": "suite"
  },
  {
    "name": "statement result \"raw\" accepts seven significant decimal",
    "type": "test"
  },
  {
    "name": "statement substatement result \"raw\" accepts seven significant decimal",
    "type": "test"
  },
  {
    "name": "A \"score\" Object's \"min\" property is a Decimal accurate to seven significant decimal figures (Type, 4.1.5.1.table1.row3.a, SCORM 2004 4Ed)",
    "type": "suite"
  },
  {
    "name": "statement result \"min\" accepts seven significant decimal",
    "type": "test"
  },
  {
    "name": "statement substatement result \"min\" accepts seven significant decimal",
    "type": "test"
  },
  {
    "name": "A \"score\" Object's \"max\" property is a Decimal accurate to seven significant decimal figures (Type, 4.1.5.1.table1.row4.a, SCORM 2004 4Ed)",
    "type": "suite"
  },
  {
    "name": "statement result \"max\" accepts seven significant decimal",
    "type": "test"
  },
  {
    "name": "statement substatement result \"max\" accepts seven significant decimal",
    "type": "test"
  },
  {
    "name": "A \"success\" property is a Boolean (Type, 4.1.5.table1.row2.a)",
    "type": "suite"
  },
  {
    "name": "statement result \"success\" property is string \"true\"",
    "type": "test"
  },
  {
    "name": "statement result \"success\" property is string \"false\"",
    "type": "test"
  },
  {
    "name": "statement substatement result \"success\" property is string \"true\"",
    "type": "test"
  },
  {
    "name": "statement substatement result \"success\" property is string \"false\"",
    "type": "test"
  },
  {
    "name": "A \"completion\" property is a Boolean (Type, 4.1.5.table1.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement result \"completion\" property is string \"true\"",
    "type": "test"
  },
  {
    "name": "statement result \"completion\" property is string \"false\"",
    "type": "test"
  },
  {
    "name": "statement substatement result \"completion\" property is string \"true\"",
    "type": "test"
  },
  {
    "name": "statement substatement result \"completion\" property is string \"false\"",
    "type": "test"
  },
  {
    "name": "A \"response\" property is a String (Type, 4.1.5.table1.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement result \"response\" property is numeric",
    "type": "test"
  },
  {
    "name": "statement result \"completion\" property is object",
    "type": "test"
  },
  {
    "name": "statement substatement result \"completion\" property is numeric",
    "type": "test"
  },
  {
    "name": "statement substatement result \"completion\" property is object",
    "type": "test"
  },
  {
    "name": "A \"duration\" property is a formatted to ISO 8601 (Type, 4.1.5.table1.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement result \"duration\" property is invalid",
    "type": "test"
  },
  {
    "name": "statement substatement result \"duration\" property is invalid",
    "type": "test"
  },
  {
    "name": "A \"duration\" property keeps at least 0.01 seconds of precision (Type, 4.1.5.table1.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement result \"duration\" property is invalid",
    "type": "test"
  },
  {
    "name": "statement substatement result \"duration\" property is invalid",
    "type": "test"
  },
  {
    "name": "An \"extensions\" property is an Object (Type, 4.1.5.table1.row3.a)",
    "type": "suite"
  },
  {
    "name": "statement result \"extensions\" property is numeric",
    "type": "test"
  },
  {
    "name": "statement result \"extensions\" property is string",
    "type": "test"
  },
  {
    "name": "statement substatement result \"extensions\" property is numeric",
    "type": "test"
  },
  {
    "name": "statement substatement result \"extensions\" property is string",
    "type": "test"
  },
  {
    "name": "An LRS stores 32-bit floating point numbers with at least the precision of IEEE 754 (4.1.12.d.a)",
    "type": "suite"
  },
  {
    "name": "statement result \"extensions\" property is numeric",
    "type": "test"
  },
  {
    "name": "statement result \"extensions\" property is string",
    "type": "test"
  },
  {
    "name": "statement substatement result \"extensions\" property is numeric",
    "type": "test"
  },
  {
    "name": "statement substatement result \"extensions\" property is string",
    "type": "test"
  },
  {
    "name": "StatementRefs Verify Templates",
    "type": "suite"
  },
  {
    "name": "should pass statement StatementRef template",
    "type": "test"
  },
  {
    "name": "should pass substatement StatementRef template",
    "type": "test"
  },
  {
    "name": "A Statement Reference is defined by the \"objectType\" of an \"object\" with value \"StatementRef\" (4.1.4.2.a)",
    "type": "suite"
  },
  {
    "name": "statementref invalid when not \"StatementRef\"",
    "type": "test"
  },
  {
    "name": "substatement statementref invalid when not \"StatementRef\"",
    "type": "test"
  },
  {
    "name": "A Statement Reference contains an \"id\" property (Multiplicity, 4.1.4.3.table1.row2.b)",
    "type": "suite"
  },
  {
    "name": "statementref invalid when missing \"id\"",
    "type": "test"
  },
  {
    "name": "substatement statementref invalid when missing \"id\"",
    "type": "test"
  },
  {
    "name": "A Statement Reference's \"id\" property is a UUID (Type, 4.1.4.3.table1.row2.a)",
    "type": "suite"
  },
  {
    "name": "statementref \"id\" not \"uuid\"",
    "type": "test"
  },
  {
    "name": "substatement statementref \"id\" not \"uuid\"",
    "type": "test"
  },
  {
    "name": "Statements Verify Templates",
    "type": "suite"
  },
  {
    "name": "should pass statement template",
    "type": "test"
  },
  {
    "name": "A Statement contains an \"actor\" property (Multiplicity, 4.1.b)",
    "type": "suite"
  },
  {
    "name": "statement \"actor\" missing",
    "type": "test"
  },
  {
    "name": "A Statement contains a \"verb\" property (Multiplicity, 4.1.b)",
    "type": "suite"
  },
  {
    "name": "statement \"verb\" missing",
    "type": "test"
  },
  {
    "name": "A Statement contains an \"object\" property (Multiplicity, 4.1.b)",
    "type": "suite"
  },
  {
    "name": "statement \"object\" missing",
    "type": "test"
  },
  {
    "name": "A Statement's \"id\" property is a String (Type, 4.1.1.description.a)",
    "type": "suite"
  },
  {
    "name": "statement \"id\" invalid numeric",
    "type": "test"
  },
  {
    "name": "statement \"id\" invalid object",
    "type": "test"
  },
  {
    "name": "A Statement's \"id\" property is a UUID following RFC 4122 (Syntax, RFC 4122)",
    "type": "suite"
  },
  {
    "name": "statement \"id\" invalid UUID with too many digits",
    "type": "test"
  },
  {
    "name": "statement \"id\" invalid UUID with non A-F",
    "type": "test"
  },
  {
    "name": "A TimeStamp is defined as a Date/Time formatted according to ISO 8601 (Format, ISO8601)",
    "type": "suite"
  },
  {
    "name": "statement \"template\" invalid string",
    "type": "test"
  },
  {
    "name": "statement \"template\" invalid date",
    "type": "test"
  },
  {
    "name": "A \"timestamp\" property is a TimeStamp (Type, 4.1.2.1.table1.row7.a, 4.1.2.1.table1.row7.b)",
    "type": "suite"
  },
  {
    "name": "statement \"template\" invalid string",
    "type": "test"
  },
  {
    "name": "statement \"template\" invalid date",
    "type": "test"
  },
  {
    "name": "A \"stored\" property is a TimeStamp (Type, 4.1.2.1.table1.row8.a, 4.1.2.1.table1.row8.b) **Caution: these tests need reworked. They do not test what they are trying to test.**",
    "type": "suite"
  },
  {
    "name": "statement \"stored\" invalid string",
    "type": "test"
  },
  {
    "name": "statement \"stored\" invalid date",
    "type": "test"
  },
  {
    "name": "test good timestamp data (predict will still be rejected because of \"stored\" property)",
    "type": "test"
  },
  {
    "name": "A \"version\" property enters the LRS with the value of \"1.0.0\" or is not used (Vocabulary, 4.1.10.e, 4.1.10.f)",
    "type": "suite"
  },
  {
    "name": "statement \"version\" invalid string",
    "type": "test"
  },
  {
    "name": "statement \"version\" invalid",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request any Statement having a property whose value is set to \"null\", except in an \"extensions\" property (4.1.12.d.a)",
    "type": "suite"
  },
  {
    "name": "statement actor should fail on \"null\"",
    "type": "test"
  },
  {
    "name": "statement verb should fail on \"null\"",
    "type": "test"
  },
  {
    "name": "statement context should fail on \"null\"",
    "type": "test"
  },
  {
    "name": "statement object should fail on \"null\"",
    "type": "test"
  },
  {
    "name": "statement activity extensions can be empty",
    "type": "test"
  },
  {
    "name": "statement result extensions can be empty",
    "type": "test"
  },
  {
    "name": "statement context extensions can be empty",
    "type": "test"
  },
  {
    "name": "statement substatement activity extensions can be empty",
    "type": "test"
  },
  {
    "name": "statement substatement result extensions can be empty",
    "type": "test"
  },
  {
    "name": "statement substatement context extensions can be empty",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a Request which uses \"version\" and has the value set to anything but \"1.0\" or \"1.0.x\", where x is the semantic versioning number (Format, 4.1.10.b, 6.2.c, 6.2.f)",
    "type": "suite"
  },
  {
    "name": "statement \"version\" valid 1.0",
    "type": "test"
  },
  {
    "name": "statement \"version\" valid 1.0.9",
    "type": "test"
  },
  {
    "name": "statement \"version\" invalid 0.9.9",
    "type": "test"
  },
  {
    "name": "statement \"version\" invalid 1.1.0",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request, a Request which the \"X-Experience-API-Version\" header's value is anything but \"1.0\" or \"1.0.x\", where x is the semantic versioning number to any API except the About API (Format, 6.2.d, 6.2.e, 6.2.f, 7.7.f)",
    "type": "suite"
  },
  {
    "name": "statement \"version\" valid 1.0",
    "type": "test"
  },
  {
    "name": "statement \"version\" valid 1.0.9",
    "type": "test"
  },
  {
    "name": "statement \"version\" invalid 0.9.9",
    "type": "test"
  },
  {
    "name": "statement \"version\" invalid 1.1.0",
    "type": "test"
  },
  {
    "name": "An LRS rejects with error code 400 Bad Request any Statement violating a Statement Requirement. (4.1.12, Varies)",
    "type": "suite"
  },
  {
    "name": "statement \"actor\" missing reply 400",
    "type": "test"
  },
  {
    "name": "statement \"verb\" missing reply 400",
    "type": "test"
  },
  {
    "name": "statement \"object\" missing reply 400",
    "type": "test"
  },
  {
    "name": "SubStatements Verify Templates",
    "type": "suite"
  },
  {
    "name": "should pass statement SubStatement template",
    "type": "test"
  },
  {
    "name": "A Sub-Statement is defined by the \"objectType\" of an \"object\" with value \"SubStatement\" (4.1.4.3.d)",
    "type": "suite"
  },
  {
    "name": "substatement invalid when not \"SubStatement\"",
    "type": "test"
  },
  {
    "name": "A Sub-Statement follows the requirements of all Statements (4.1.4.3.e)",
    "type": "suite"
  },
  {
    "name": "substatement requires actor",
    "type": "test"
  },
  {
    "name": "substatement requires object",
    "type": "test"
  },
  {
    "name": "substatement requires verb",
    "type": "test"
  },
  {
    "name": "should pass substatement context",
    "type": "test"
  },
  {
    "name": "should pass substatement result",
    "type": "test"
  },
  {
    "name": "should pass substatement statementref",
    "type": "test"
  },
  {
    "name": "should pass substatement as agent",
    "type": "test"
  },
  {
    "name": "should pass substatement as group",
    "type": "test"
  },
  {
    "name": "A Sub-Statement cannot have a Sub-Statement (4.1.4.2.g)",
    "type": "suite"
  },
  {
    "name": "substatement invalid nested \"SubStatement\"",
    "type": "test"
  },
  {
    "name": "A Sub-Statement cannot use the \"id\" property at the Statement level (4.1.4.2.f)",
    "type": "suite"
  },
  {
    "name": "substatement invalid with property \"id\"",
    "type": "test"
  },
  {
    "name": "A Sub-Statement cannot use the \"stored\" property (4.1.4.2.f)",
    "type": "suite"
  },
  {
    "name": "substatement invalid with property \"stored\"",
    "type": "test"
  },
  {
    "name": "A Sub-Statement cannot use the \"version\" property (4.1.4.2.f)",
    "type": "suite"
  },
  {
    "name": "substatement invalid with property \"version\"",
    "type": "test"
  },
  {
    "name": "A Sub-Statement cannot use the \"authority\" property (4.1.4.2.f)",
    "type": "suite"
  },
  {
    "name": "substatement invalid with property \"authority\"",
    "type": "test"
  },
  {
    "name": "All UUID types follow requirements of RFC4122 (Type, 4.1.1)",
    "type": "suite"
  },
  {
    "name": "statement \"id\" invalid UUID with too many digits",
    "type": "test"
  },
  {
    "name": "statement \"id\" invalid UUID with non A-F",
    "type": "test"
  },
  {
    "name": "statement object statementref \"id\" invalid UUID with too many digits",
    "type": "test"
  },
  {
    "name": "statement object statementref \"id\" invalid UUID with non A-F",
    "type": "test"
  },
  {
    "name": "statement context \"registration\" invalid UUID with too many digits",
    "type": "test"
  },
  {
    "name": "statement context \"registration\" invalid UUID with non A-F",
    "type": "test"
  },
  {
    "name": "statement context \"statement\" invalid UUID with too many digits",
    "type": "test"
  },
  {
    "name": "statement substatement context \"statement\" invalid UUID with non A-F",
    "type": "test"
  },
  {
    "name": "All UUID types are in standard String form (Type, 4.1.1)",
    "type": "suite"
  },
  {
    "name": "statement \"id\" invalid numeric",
    "type": "test"
  },
  {
    "name": "statement \"id\" invalid object",
    "type": "test"
  },
  {
    "name": "statement object statementref \"id\" invalid numeric",
    "type": "test"
  },
  {
    "name": "statement object statementref \"id\" invalid object",
    "type": "test"
  },
  {
    "name": "statement context \"registration\" invalid numeric",
    "type": "test"
  },
  {
    "name": "statement context \"registration\" invalid object",
    "type": "test"
  },
  {
    "name": "statement context \"statement\" invalid numeric",
    "type": "test"
  },
  {
    "name": "statement substatement context \"statement\" invalid object",
    "type": "test"
  },
  {
    "name": "Verbs Verify Templates",
    "type": "suite"
  },
  {
    "name": "should pass statement verb template",
    "type": "test"
  },
  {
    "name": "should pass substatement verb template",
    "type": "test"
  },
  {
    "name": "A \"verb\" property contains an \"id\" property (Multiplicity, 4.1.3.table1.row1.b)",
    "type": "suite"
  },
  {
    "name": "statement verb missing \"id\"",
    "type": "test"
  },
  {
    "name": "statement substatement verb missing \"id\"",
    "type": "test"
  },
  {
    "name": "A \"verb\" property's \"id\" property is an IRI (Type, 4.1.3.table1.row1.a)",
    "type": "suite"
  },
  {
    "name": "statement verb \"id\" not IRI",
    "type": "test"
  },
  {
    "name": "statement substatement verb \"id\" not IRI",
    "type": "test"
  },
  {
    "name": "A Voiding Statement is defined as a Statement whose \"verb\" property's \"id\" property's IRI ending with \"voided\" (4.3)",
    "type": "suite"
  },
  {
    "name": "statement verb voided IRI ends with \"voided\" (WARNING: this applies \"Upon receiving a Statement that voids another, the LRS SHOULD NOT* reject the request on the grounds of the Object of that voiding Statement not being present\")",
    "type": "test"
  },
  {
    "name": "A Voiding Statement's \"objectType\" field has a value of \"StatementRef\" (Format, 4.3.a)",
    "type": "suite"
  },
  {
    "name": "statement verb voided uses substatement with \"StatementRef\"",
    "type": "test"
  },
  {
    "name": "statement verb voided does not use object \"StatementRef\"",
    "type": "test"
  },
  {
    "name": "A \"verb\" property's \"display\" property is a Language Map (Type, 4.1.3.table1.row2.a)",
    "type": "suite"
  },
  {
    "name": "statement verb \"display\" not language",
    "type": "test"
  },
  {
    "name": "statement substatement verb \"display\" not language",
    "type": "test"
  }
]
