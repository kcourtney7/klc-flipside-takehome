import React from 'react';
import { getProjectRankMetrics, getTimeseries } from "../api/fcas"


const ExampleJSPage = () => {

  const map = new Map();
  const fcasSparklineMap = new Map();
  
  var valueObject = {
    symbol: "",
    name: "",
    fcasVal: "",
    devVal: "",
    utilityVal: "",
    marketVal: "",
  }

  var columnsArray = ["Project", "Symbol", "FCAS Trend", "FCAS", "Dev Behavior", "User Activity", "Market Maturity"]
  var fcasRankData, devRankData, utilityRankData, marketRankData;

  // Call API functions here to get data.
  //
  /*fetch(getProjectRankMetrics('fcas'))
    .then(response => response.json())
    .then(data => fcasRankData = data)
    .catch((error) => {
      console.error('Error:', error);
    })

  fetch(getProjectRankMetrics('dev'))
    .then(response => response.json())
    .then(data => devRankData = data)
    .catch((error) => {
      console.error('Error:', error);
    })
  
  fetch(getProjectRankMetrics('utility'))
    .then(response => response.json())
    .then(data => utilityRankData = data)
    .catch((error) => {
      console.error('Error:', error);
    })

  fetch(getProjectRankMetrics('market-maturity'))
    .then(response => response.json())
    .then(data => marketRankData = data)
    .catch((error) => {
      console.error('Error:', error);
    })
    */
  fcasRankData = require('../api/fcasS.json').data;
  devRankData = require('../api/devS.json').data;
  marketRankData = require('../api/market-maturityS.json').data;
  
  parseFcasData()
  parseDevData()
  parseMarketData()

  let table = document.querySelector("table")
  generateTable(table, map)
  generateTableHead(table)

  function parseFcasData() {
    for(var i = 0; i < fcasRankData.length; i++) {
      let obj = fcasRankData[i];

      var key = obj.project_id
      valueObject = {
        symbol: obj.symbol,
        name: obj.project_name,
        fcasVal: obj.value,
        devVal: "",
        utilityVal: "",
        marketVal: "",
      }

      map.set(key, valueObject)
      /*
      This is where I will need to fetch the timeseries
      data
      var timeseriesResponse
      fetch(getTimeseries(key, obj.metricSlub))
      .then(Response => Response.json)
      .then(data => timeseriesResponse = data)
      */
    }
  }

  function parseDevData() {
    for(var j = 0; j < devRankData.length; j++) {
      let obj = devRankData[j];
  
      var key = obj.project_id
      valueObject = {
          symbol: obj.symbol,
          name: obj.project_name,
          fcasVal: "",
          devVal: obj.value,
          utilityVal: "",
          marketVal: "",
        }

      if(map.has(key)) {
        var tempObj =  map.get(key)
        valueObject.fcasVal = tempObj.fcasVal
        map.delete(key)
      }

      map.set(key, valueObject)      
    }
  }

  function parseMarketData() {
    for(var k = 0; k < marketRankData.length; k++) {
      let obj = marketRankData[k];

      var key = obj.project_id
      valueObject = {
          symbol: obj.symbol,
          name: obj.project_name,
          fcasVal: "",
          devVal: "",
          utilityVal: "",
          marketVal: obj.value,
        }

      if(map.has(key)) {
        var tempObj =  map.get(key)
        valueObject.fcasVal = tempObj.fcasVal
        valueObject.devVal = tempObj.devVal
        map.delete(key)
      }

      map.set(key, valueObject)      
    }
  }

  function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for(let i=0; i < columnsArray.length; i++) {
      let th = document.createElement("th");
      let text = document.createTextNode(columnsArray[i]);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  function generateTable(table, map) {

    for (const [key, value] of map.entries()) {
      let row = table.insertRow()
      let projectCell = row.insertCell();
      let projectText = document.createTextNode(value.name)
      projectCell.appendChild(projectText)

      let symbolCell = row.insertCell();
      let symbolText = document.createTextNode(value.symbol)
      symbolCell.appendChild(symbolText)

      let trendCell = row.insertCell();
      let trendText = document.createTextNode("functionality not yet implemented")
      trendCell.appendChild(trendText)

      let fcasCell = row.insertCell();
      let fcasText = document.createTextNode(value.fcasVal)
      fcasCell.appendChild(fcasText)

      let devCell = row.insertCell();
      let devText = document.createTextNode(value.devVal)
      devCell.appendChild(devText)

      let utilityCell = row.insertCell();
      let utilityText = document.createTextNode(value.utilityVal)
      utilityCell.appendChild(utilityText)

      let marketCell = row.insertCell();
      let marketText = document.createTextNode(value.marketVal)
      marketCell.appendChild(marketText)
    }
  }

  return (
    <div>
      <h1>Example Javascript Page</h1>
    </div>
  );
}

export default ExampleJSPage;
