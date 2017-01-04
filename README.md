# Das Hackathon
A generic PWA for hackathon organisers. Stylistically descended from the Google IO 2016 PWA (read: shameless copycatting).

Current capabilities:
* Front page event cards.
* Event schedule (todo: storage, account synchronization, push notifications)
* Project listings
* Sponsor cards
* Offline and lie-fi tolerant


## Deployment
Run:
```bash
  yarn # or npm install
  bower install
  gulp
```

Place the output of build/unbundled and/or build/bundled where you see fit (i.e. /var/www, serve in-situ).

Please note that several features **do not** function over http, so it is strongly recommended to configure your host to server over https. A simple surge.sh deployment behind a cloudflare redirect is particularly easy to set up. 
