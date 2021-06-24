# LS170

## The OSI or TCP/IP layers

__Application layer__
Protocol: HTTP
PDU: Messages (contains the HTTP request)
Payload: This PDU becomes the payload of the layer below it.
What does it do: End-to-end communication between applications

Skip the presentation and session layer

__Transport Layer__
Protocol: TCP or UDP
PDU: Segment or Datagram
Payload: Messages from application layer.
Headers: Source and Destination Port number
What does it do: End-to-end communication between hosts
Notes: This is where multiplexing and demultiplexing happens.

__Network / Internet Layer__
Protocol: IP
PDU: IP Packet
Payload: Segment or Datagram from the transport layer
Headers: Source and Destination IP number
What does it do: Provides logical point-to-point connection between two devices on different networks.

__Data Link Layer__
Protocol: Ethernet (or the wifi one)
PDU: Frame
Payload: Packet from the internet layers
Header: Source and Destination MAC Address
What does it do: Provides point-to-point connection between two devices on the same network.

__Physical Layer__
- No more encapstulation. Everything is converted into bits and sent on it's way.
- We can send them through electrical signal, light and radio waves.
- Limited by certain physical properties which impacts
  - Latency: It's a measure of delay from point A to point B
  - Bandwidth: It's a measure of the maximum amount of capactity of data that can be sent at one specific time.

## What is the request / response cycle?

Request is sent by a client, usually a browser. Like when we are surfing the internet. Accessing a URL on the browser is when our browser which is the client sents a request to a server. For example, if we're trying to reach google.com. Google.com will be on the server side. Putting the DNS mechanics aside, once the request reaches google's server and a connection is established, it now writes a response to reply back to what our request is asking for.

In our request, we will send some information that tells the server how to respond to our request. The only required data that needs to be sent is the request line which contains the request method (usually GET when retrieving resrouce), URL (path), and the HTTP version. While optional, a request can also contain headers (it usually has headers more than not) and body (usually when sending a POST request).

In a response, the server must send back the required items which is the status code and message and HTTP version. While optional, a response may also contain headers (like set cookie and session info) and a body (which is usually the resource that we asked for).

Note: Why is the header and body optional?
- Because there are status codes that don't return any body such as 302 which will redirect you to another page.
- You would most likely send headers than not these days.







