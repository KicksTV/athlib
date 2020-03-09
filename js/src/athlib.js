import {
  hello,
  normalizeGender,
  perfToFloat,
  isFieldEvent,
  isMultiEvent,
  betterPerformance,
  pad,
  discipline_sort_key,
  text_discipline_sort_key,
  sort_by_discipline,
  getDistance,
  roundUpStrNum,
  formatSecondsAsTime,
  parseHms,
  str2num,
  checkEventCode,
  invertKeyValues,
  regexCaptures,
  normalizeEventCode,
  fieldEventRecord,
  checkPerformanceForDiscipline,
  isHandTiming
} from './utils';

import { tyrvingScore } from './tyrving_score.js';

import { qkidsScore } from './qkids_score.js';

import { calcUkaAgeGroup } from './uka_agegroups';

import { HighJumpCompetition } from './highjump.js';

import {
  FIELD_EVENTS,
  FIELD_SORT_ORDER,
  JUMPS,
  MULTI_EVENTS,
  STANDARD_FEMALE_TRACK_EVENTS,
  STANDARD_MALE_TRACK_EVENTS,
  THROWS,
  PAT_EVENT_CODE,
  PAT_FIELD,
  PAT_FINISH_RECORD,
  PAT_HORIZONTAL_JUMPS,
  PAT_HURDLES,
  PAT_JUMPS,
  PAT_LEADING_DIGITS,
  PAT_LEADING_FLOAT,
  PAT_LENGTH_EVENT,
  PAT_LONG_SECONDS,
  PAT_MULTI,
  PAT_NOT_FINISHED,
  PAT_PERF,
  PAT_RACES_FOR_DISTANCE,
  PAT_RELAYS,
  PAT_ROAD,
  PAT_RUN,
  PAT_THROWS,
  PAT_TIMED_EVENT,
  PAT_TRACK,
  PAT_VERTICAL_JUMPS,
  FIELD_EVENT_RECORDS_BY_GENDER,
  codesmap
} from './patterns.js';

import {
  version
} from './version.js';

var disciplineSortKey = discipline_sort_key;
var textDisciplineSortKey = text_discipline_sort_key;
var sortByDiscipline = sort_by_discipline;

module.exports = {
  // start of patterns exports
  FIELD_EVENTS,
  FIELD_SORT_ORDER,
  JUMPS,
  MULTI_EVENTS,
  STANDARD_FEMALE_TRACK_EVENTS,
  STANDARD_MALE_TRACK_EVENTS,
  THROWS,
  PAT_EVENT_CODE,
  PAT_FIELD,
  PAT_FINISH_RECORD,
  PAT_HORIZONTAL_JUMPS,
  PAT_HURDLES,
  PAT_JUMPS,
  PAT_LEADING_DIGITS,
  PAT_LEADING_FLOAT,
  PAT_LENGTH_EVENT,
  PAT_LONG_SECONDS,
  PAT_MULTI,
  PAT_NOT_FINISHED,
  PAT_PERF,
  PAT_RACES_FOR_DISTANCE,
  PAT_RELAYS,
  PAT_ROAD,
  PAT_RUN,
  PAT_THROWS,
  PAT_TIMED_EVENT,
  PAT_TRACK,
  PAT_VERTICAL_JUMPS,
  FIELD_EVENT_RECORDS_BY_GENDER,
  codesmap,
  // end of patterns exports
  hello,
  normalizeGender,
  perfToFloat,
  calcUkaAgeGroup,
  tyrvingScore,
  qkidsScore,
  isFieldEvent,
  isMultiEvent,
  betterPerformance,
  HighJumpCompetition,
  pad,
  discipline_sort_key,
  disciplineSortKey,
  text_discipline_sort_key,
  textDisciplineSortKey,
  sort_by_discipline,
  sortByDiscipline,
  getDistance,
  roundUpStrNum,
  formatSecondsAsTime,
  parseHms,
  str2num,
  checkEventCode,
  invertKeyValues,
  regexCaptures,
  normalizeEventCode,
  fieldEventRecord,
  checkPerformanceForDiscipline,
  isHandTiming,
  version
};
