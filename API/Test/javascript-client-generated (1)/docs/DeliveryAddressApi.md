# NordicRecipientAdminApp.DeliveryAddressApi

All URIs are relative to *https://virtserver.swaggerhub.com/NordicRecipientAdmin/NordicRecipientAdminAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findDeliveryAddresses**](DeliveryAddressApi.md#findDeliveryAddresses) | **GET** /deliveryAddresses | Finds delivery addresses by route name


<a name="findDeliveryAddresses"></a>
# **findDeliveryAddresses**
> [DeliveryAddress] findDeliveryAddresses(routeName)

Finds delivery addresses by route name

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

let apiInstance = new NordicRecipientAdminApp.DeliveryAddressApi();

let routeName = "routeName_example"; // String | api allows starts-with 2 first characters


apiInstance.findDeliveryAddresses(routeName, (error, data, response) => {
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
 **routeName** | **String**| api allows starts-with 2 first characters | 

### Return type

[**[DeliveryAddress]**](DeliveryAddress.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

