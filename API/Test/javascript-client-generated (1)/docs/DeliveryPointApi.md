# NordicRecipientAdminApp.DeliveryPointApi

All URIs are relative to *https://virtserver.swaggerhub.com/NordicRecipientAdmin/NordicRecipientAdminAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findDeliveryPoints**](DeliveryPointApi.md#findDeliveryPoints) | **GET** /deliveryPoints | Finds delivery points by delivery address id


<a name="findDeliveryPoints"></a>
# **findDeliveryPoints**
> [DeliveryPoint] findDeliveryPoints()

Finds delivery points by delivery address id

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

let apiInstance = new NordicRecipientAdminApp.DeliveryPointApi();

apiInstance.findDeliveryPoints((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DeliveryPoint]**](DeliveryPoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

