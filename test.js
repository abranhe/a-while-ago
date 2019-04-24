import test from 'ava';
import wa from '.';

const timeUnits = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  year: 365 * 24 * 60 * 60 * 1000,
};

test('Throw err when the second parameters is not a boolean', (t) => {
  const error = t.throws(() => {
    wa(new Date(), 'string');
  }, TypeError);

  t.is(error.message, 'Expected a Boolean in the second argument, got string');
});

test('Check seconds ago', (t) => {
  t.is(wa(new Date() - timeUnits.second), 'a second ago');
  t.is(wa(new Date() - timeUnits.second, true), '1s');
  t.is(wa(new Date() - timeUnits.second * 2, true), '2s');
});

test('Check minutes ago', (t) => {
  t.is(wa(new Date() - timeUnits.minute), 'a minute ago');
  t.is(wa(new Date() - timeUnits.minute * 2), '2 minutes ago');
  t.is(wa(new Date() - timeUnits.minute, true), '1m');
  t.is(wa(new Date() - timeUnits.minute * 2, true), '2m');
});

test('Check hours ago', (t) => {
  t.is(wa(new Date() - timeUnits.hour), 'a hour ago');
  t.is(wa(new Date() - timeUnits.hour * 2), '2 hours ago');
  t.is(wa(new Date() - timeUnits.hour, true), '1h');
  t.is(wa(new Date() - timeUnits.hour * 2, true), '2h');
});

test('Check days ago', (t) => {
  t.is(wa(new Date() - timeUnits.day), 'a day ago');
  t.is(wa(new Date() - timeUnits.day * 2), '2 days ago');
  t.is(wa(new Date() - timeUnits.day, true), '1d');
  t.is(wa(new Date() - timeUnits.day * 2, true), '2d');
});

test('Check weeks ago', (t) => {
  t.is(wa(new Date() - timeUnits.week), 'a week ago');
  t.is(wa(new Date() - timeUnits.week * 2), '2 weeks ago');
  t.is(wa(new Date() - timeUnits.week, true), '1w');
  t.is(wa(new Date() - timeUnits.week * 2, true), '2w');
});

test('Check months ago', (t) => {
  t.is(wa(new Date() - timeUnits.month), 'a month ago');
  t.is(wa(new Date() - timeUnits.month * 2), '2 months ago');
  // TODO
  // t.is(wa(new Date() - timeUnits.month, true), '1mm');
  // t.is(wa(new Date() - timeUnits.month * 2, true), '2mm');
});

test('Check years ago', (t) => {
  t.is(wa(new Date() - timeUnits.year), 'a year ago');
  t.is(wa(new Date() - timeUnits.year * 2), '2 years ago');
  t.is(wa(new Date() - timeUnits.year, true), '1y');
  t.is(wa(new Date() - timeUnits.year * 2, true), '2y');
});

test('Check Date() age', (t) => {
  const date = new Date();
  t.is(
    wa(new Date(1) - timeUnits.year),
    `${date.getFullYear() - 1969} years ago`,
  );
});

test('Ohter Date format', (t) => {
  const date = new Date();
  t.is(
    wa('Thu Jun 7 12:00:00 EDT 2007'),
    `${date.getFullYear() - 2007} years ago`,
  );
});