## TTLI
- Live chat
- Infinite scroll
- Map tracking
- What is piracy
- Observables
- WebRTC

### To ways to handle live data
- Web Sockets:
  - Its a two way connnection or bidirectional live data from either side
  - Means you can send data from UI layer to data layer or Data layer to UI layer
  - Its get enstablished once you open the app and you can immediately send or receive the data.
  - No regular interval the data can be come in anytime.
  - Bit heavy as compare to API polling 
  - Like Trading App, whats app
- API Polling or Long Poling
  - UI request the server but the data flows from Data to UI its unidirection
  - After a regular interval of time UI will keep polling the server for the data.
  - Like after every 10 sec UI poll server
  - Like Gmail, cricbuzz

