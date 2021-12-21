import { useCallback, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import moment from "moment";
import Calendar from "tui-calendar";
import { ISchedule, ICalendarInfo } from "tui-calendar";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  opacity: 1;

  &.btn {
    width: 100px;
    border-radius: 3em;

    &.btn-round {
      border-radius: 50%;
      width: 35px;
      height: 35px;
    }
  }

  &:hover {
    border: 1px solid #efefef;
  }
`;

const start = moment().format();
const end = moment().add(30, "minute").format();

export default function UseCalendar() {
  const cal = useRef(null);

  const handleClickPrevButton = () => {
    const calendarInstance = cal.current.getInstance();
    console.log(calendarInstance);
    calendarInstance.prev();
  };
  const handleClickNextButton = () => {
    const calendarInstance = cal.current.getInstance();
    console.log(calendarInstance);
    calendarInstance.next();
  };

  const schedules: ISchedule[] = [
    {
      calendarId: "1",
      category: "time",
      isVisible: true,
      title: "Study",
      id: "1",
      body: "Test",
      start,
      end,
    },
    {
      calendarId: "2",
      category: "time",
      isVisible: true,
      title: "Meeting",
      id: "2",
      body: "Description",
      start: moment().add(1, "hours").format(),
      end: moment().add(2, "hours").format(),
    },
    {
      calendarId: "3",
      category: "time",
      isVisible: true,
      title: "TOAST UI",
      id: "3",
      body: "Description",
      start: moment().format(),
      end: moment().add(30, "day").format(),
    },
  ];

  const calendars: ICalendarInfo[] = [
    {
      id: "1",
      name: "Calendar",
      color: "#ffffff",
      bgColor: "#9e5fff",
      dragBgColor: "#9e5fff",
      borderColor: "#9e5fff",
    },
    {
      id: "2",
      name: "Company",
      color: "#ffffff",
      bgColor: "#00a9ff",
      dragBgColor: "#00a9ff",
      borderColor: "#00a9ff",
    },
    {
      id: "3",
      name: "Private",
      bgColor: "#9e5fff",
      borderColor: "#9e5fff",
    },
  ];

  const onClickSchedule = useCallback((e) => {
    const { calendarId, id } = e.schedule;
    const el = cal.current.calendarInst.getElement(id, calendarId);
    console.log(e, el.getBoundingClientRect());
  }, []);

  const onBeforeCreateSchedule = useCallback((scheduleData) => {
    console.log(scheduleData.raw);
    const schedule = {
      id: String(Math.random()),
      title: scheduleData.title,
      isAllDay: scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: scheduleData.isAllDay ? "allday" : "time",
      dueDateClass: "",
      location: scheduleData.location,
      // raw: {
      //     class: scheduleData.raw["class"]
      // },
      state: scheduleData.state,
    };

    cal.current.calendarInst.createSchedules([schedule]);
  }, []);

  const onBeforeDeleteSchedule = useCallback((res) => {
    console.log(res);
    const { id, calendarId } = res.schedule;

    cal.current.calendarInst.deleteSchedule(id, calendarId);
  }, []);

  const onBeforeUpdateSchedule = useCallback((e) => {
    console.log(e);
    const { schedule, changes } = e;

    cal.current.calendarInst.updateSchedule(
      schedule.id,
      schedule.calendarId,
      changes
    );
  }, []);

  const handleClickTodayButton = useCallback(() => {
    const calendarInstance = cal.current.getInstance();
    console.log(calendarInstance);
    calendarInstance.today();
  }, []);

  function _getFormattedTime(time: string | number | Date) {
    const date = new Date(time);
    const h = date.getHours();
    const m = date.getMinutes();

    return `${h}:${m}`;
  }

  function _getTimeTemplate(
    schedule: {
      start: string | number | Date,
      isPrivate: any,
      isReadOnly: any,
      recurrenceRule: any,
      attendees: string | any[],
      location: any,
      title: string,
    },
    isAllDay: boolean
  ) {
    var html = [];

    if (!isAllDay) {
      html.push("<strong>" + _getFormattedTime(schedule.start) + "</strong> ");
    }
    if (schedule.isPrivate) {
      html.push('<span class="calendar-font-icon ic-lock-b"></span>');
      html.push(" Private");
    } else {
      if (schedule.isReadOnly) {
        html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
      } else if (schedule.recurrenceRule) {
        html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
      } else if (schedule.attendees.length) {
        html.push('<span class="calendar-font-icon ic-user-b"></span>');
      } else if (schedule.location) {
        html.push('<span class="calendar-font-icon ic-location-b"></span>');
      }
      html.push(" " + schedule.title);
    }

    return html.join("");
  }

  const templates = {
    time: function (schedule: any) {
      return _getTimeTemplate(schedule, false);
    },
  };

  return (
    <>
      <Button onClick={handleClickTodayButton} className="btn">
        Today
      </Button>
      <Button onClick={handleClickPrevButton} className="btn btn-round">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Button onClick={handleClickNextButton} className="btn btn-round">
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
      <Calendar
        ref={cal}
        height="900px"
        view="month"
        scheduleView
        taskView
        template={templates}
        disableDblClick={true}
        disableClick={false}
        isReadOnly={false}
        defaultView="week"
        useDetailPopup={true}
        useCreationPopup={true}
        schedules={schedules}
        calendars={calendars}
        onClickSchedule={onClickSchedule}
        onBeforeCreateSchedule={onBeforeCreateSchedule}
        onBeforeDeleteSchedule={onBeforeDeleteSchedule}
        onBeforeUpdateSchedule={onBeforeUpdateSchedule}
      />
    </>
  );
}
