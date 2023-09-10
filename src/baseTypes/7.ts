/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekdays {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
}

function isWeekend(Workday: Weekdays): boolean {
  return Workday !== Weekdays.SAT && Workday !== Weekdays.SUN ? true : false;
}