# Heimdall API v1

The **Heimdall API** allows the [**Heimdall APP**](../client) to handle with the door locks status, including advanced functionality like open the door until a specific time, close the door instantly, and check if is open.

## Request and response formats

In general, the Heimdall API uses HTTP POST requests with JSON arguments and JSON responses.
> Request authentication is **not** required **yet**.


## Doors

Require a valid Token included in the header of the request.

### Status

Each endpoint manipulates or displays information related to the **Door status** whose **ID** is provided with the url:

- [Get Status](doc/status/status.md) : `GET /status/:doorID`
- [Update Status to Open](doc/status/open.md) : `POST /open/:doorID`
- [Update Status to Closed](doc/status/close.md) : `POST /close/:doorID`


## Monterin

> A future feature, where it will be possible to associate **many Doors** to a **Monterin** and manage all of them in one dashboard.
>
> **Note**: Monterin is like a house, an office or a hotel, where are many doors do manage.