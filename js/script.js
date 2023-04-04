// Copyright (c) 2022 Sirine Cherkaoui All rights reserved
//
// Created by: Sirine Cherkaoui
// Created on: April 2023
// This file contains the JS functions for index.html

/**
 * This function calculates volume of sphere.
 */
function calculate() {
   // input the radius
   let radius = parseFloat(document.getElementById('radius-of-sphere').value);

   // carry out calculations
   let volume = 4.0/3.0 * Math.PI * radius**3;

   // display calculations
   document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm<sup>3</sup>';
}