(function(moment) {
  moment.fn.verboseDiff = function(date2) {
    return moment.verboseDiff(this, date2);
  };

  moment.verboseDiff = function(date1, date2) {
    var d1 = moment(date1),
        d2 = moment(date2);

    if (d1.isSame(d2)) {
      return 0;
    } else if (d1.isBefore(d2)) {
      return false;
    }

    var dDiff = d1.date() - d2.date(),
        hDiff = d1.hour() - d2.hour(),
        minDiff = d1.minute() - d2.minute(),
        secDiff = d1.second() - d2.second();

    if (secDiff < 0) {
      secDiff = 60 + secDiff;
      minDiff--;
    }

    if (minDiff < 0) {
      minDiff = 60 + minDiff;
      hDiff--;
    }

    if (hDiff < 0) {
      hDiff = 60 + hDiff;
      dDiff--;
    }

    return {
      "days": dDiff,
      "hours": hDiff,
      "minutes": minDiff,
      "seconds": secDiff,
    };
  };
})(moment);
