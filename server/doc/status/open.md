# Update Status to Open

Update the door status to open.
If you want, you can pass an hour to close the door automatically.

**URL** : `/open/:doorID`

**Method** : `POST`

**Auth required** : YES

**Data constrains**

```json
{
    "closeAt": "[datetime optional]"
}
```

**Data example** All the attributes are optional.

```json
{
    "closeAt": "2022-07-22 07:00:00"
}
```


## Success Response

**Code** : `201 OK`

**Content examples**

Open the door until close again.

```json
{}
```

Open the door until the provided hour

```json
{
    "closeAt": "2021-11-12 19:30:00"
}
```


## Error Response

**Condition** : Provided Token is not Owner of Door at URL.

**Code** : `403 FORBIDDEN`

**Content** : `{}`


## Notes

### If ID not exists

If the Door ID doesn't exist, it will be created a new door with the provided ID.

### Data ignored

Endpoint will ignore irrelevant and read-only data such as parameters that don't exist.

**Data example**

```json
{
    "foo": "bar"
}
```