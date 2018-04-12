# NordicRecipientAdminApp.RouteApi

All URIs are relative to *https://virtserver.swaggerhub.com/NordicRecipientAdmin/NordicRecipientAdminAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findRoutes**](RouteApi.md#findRoutes) | **GET** /routes | Finds Routes by name


<a name="findRoutes"></a>
# **findRoutes**
> [MailDeliveryRoute] findRoutes(name)

Finds Routes by name

Muliple tags can be provided with comma separated strings. Use\\ \\ tag1, tag2, tag3 for testing.

### Example
```javascript
import NordicRecipientAdminApp from 'nordic_recipient_admin_app';
let defaultClient = NordicRecipientAdminApp.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new NordicRecipientAdminApp.RouteApi();

let name = "name_example"; // String | api allows starts-with 2 first characters


apiInstance.findRoutes(name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| api allows starts-with 2 first characters | 

### Return type

[**[MailDeliveryRoute]**](MailDeliveryRoute.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

