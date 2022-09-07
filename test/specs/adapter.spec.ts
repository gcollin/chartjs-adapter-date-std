import {StdDateAdapter} from "../../src";
import {_adapters, TimeUnit} from "chart.js";

describe('date-std adapter', function() {
  it('should format correctly using format presets', function() {
    const adapter = new StdDateAdapter('en-US');
    expect(adapter).toBeDefined();

    const formats = adapter.formats();
    expect(formats).toEqual({
      datetime: 'datetime',
      millisecond: 'millisecond',
      second: 'second',
      minute: 'minute',
      hour: 'hour',
      day: 'day',
      week: 'week',
      month: 'month',
      quarter: 'quarter',
      year: 'year'
    });

    const timestamp = adapter.parse('2019-05-28T15:10:27.000');
    expect(adapter.format(timestamp, <TimeUnit>formats.year)).toEqual('2019');
    expect(adapter.format(timestamp, <TimeUnit>formats.quarter)).toEqual('Q2 - 2019');
    expect(adapter.format(timestamp, <TimeUnit>formats.month)).toEqual('May 2019');
    expect(adapter.format(timestamp, <TimeUnit>formats.week)).toEqual('May 28, 2019');
    expect(adapter.format(timestamp, <TimeUnit>formats.day)).toEqual('May 28');
    expect(adapter.format(timestamp, <TimeUnit>formats.hour)).toEqual('3 PM');
    expect(adapter.format(timestamp, <TimeUnit>formats.minute)).toEqual('3:10 PM');
    expect(adapter.format(timestamp, <TimeUnit>formats.second)).toEqual('3:10:27 PM');
    expect(adapter.format(timestamp, <TimeUnit>formats.millisecond)).toEqual('3:10:27.000 PM');
    expect(adapter.format(timestamp, <TimeUnit>formats.datetime)).toEqual('May 28, 2019, 3:10:27 PM');

    let formatted=adapter.format(timestamp, <TimeUnit>formats.quarter);
    expect(formatted).toEqual('Q2 - 2019');
    let parsedDate = new Date(adapter.parse(formatted));
    expect(parsedDate.getFullYear()).toEqual(2019);
    expect(parsedDate.getMonth()).toEqual(4);

    let othertimestamp = adapter.parse('2019-12-28T15:10:27.000');
    formatted=adapter.format(othertimestamp, <TimeUnit>formats.quarter);
    expect(formatted).toEqual('Q4 - 2019');
    parsedDate = new Date(adapter.parse(formatted));
    expect(parsedDate.getFullYear()).toEqual(2019);
    expect(parsedDate.getMonth()).toEqual(10);

    othertimestamp = adapter.parse('2019-01-28T15:10:27.000');
    formatted=adapter.format(othertimestamp, <TimeUnit>formats.quarter);
    expect(formatted).toEqual('Q1 - 2019');
    parsedDate = new Date(adapter.parse(formatted));
    expect(parsedDate.getFullYear()).toEqual(2019);
    expect(parsedDate.getMonth()).toEqual(1);

  });
});
