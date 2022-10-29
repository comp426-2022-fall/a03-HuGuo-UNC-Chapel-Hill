#!/usr/bin/env node

import { roll } from "../lib/roll.js"

import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

const side_in = args.side
const dice_in = args.dice
const rolls_in = args.rolls

var side = 6
var dice = 2
var rolls = 1

if (side_in) {
    side = side_in
}

if (dice_in) {
    dice = dice_in
}

if (rolls_in) {
    rolls = rolls_in
}

roll(side, dice, rolls)