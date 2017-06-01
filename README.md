# router
Stream Router - a Web interface for a server that can redirect network streams.

So far, the server is written in Node and uses Express. This repo contains all files except node_modules.

The goal is for the client to load a web interface that is populated with 'Tombstones' (stones for short). Each stone represents a content stream.

There are Source tombstones and Destination tombstones. All stones have the following in common:
 - Title
 - ID Number
 - Realm (Source/Destination)
 - Type
 - Status (Active/Disabled)

 Every Destination stone will contain a source attribute. The Source attribute references an existing Source stone.  

 Use Case:
 The user sets up a Source Tombstone that decodes an RTSP stream. The user than assigns a destination stone that references a physical video output and assigns the RTSP source to be routed to that destination stone.

 The Type attribute shall define the functionality of that tombstone. Planned Types include:
 Source Types
 - RTSP Decoder
 - RTMP Server (Decode)

 Destination Types
 - RTSP Encoder
 - RTMP Server (Encode)
 - Remote Physical Output (Remote RPi)
 - Local Physical Output (BMD Decklink Duo)

Tombstones shall be generated client side once the client recieves the JSON file that contains the objects for each stone that should be displayed. When the client 'Updates' one stone, client side js will construct the object from that stones input fields and POST it to the server.

