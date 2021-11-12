# Show Status

Get the status of the provided.

**URL** : `/status/:doorID`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content examples**

For a Door on the local database where that Door is closed.

```json
{
    "isOpen": false
}
```

For a Door on the local database but that is now open.

```json
{
    "isOpen": true
}
```