---
title: Functions in JavaScript
date: "2015-12-10T22:12:03.284Z"
layout: post
readNext: "/my-second-post/"
path: "/hello-world/"
---

This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's some code from one of my JavaScript projects, [Metro App](https://github.com/WojoSite/metroApp).

```javascript
const filterTrainsByStation = (trains, stationCode) => {
  return trains.filter(train => train.LocationCode === stationCode)
}

const getStationByCode = (stations, stationCode) => {
  let i = stations.findIndex(station => station.Code === stationCode)
  return stations[i]
}
```
