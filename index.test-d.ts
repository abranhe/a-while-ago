import { expectType } from 'tsd';
import awa = require('.');

expectType<String>(awa('Thu Jun 7 12:00:00 EDT 2007'));
expectType<String>(awa(1000, true));
