defmodule Times2Web.TimesheetView do
  use Times2Web, :view
  alias Times2Web.TimesheetView

  def render("index.json", %{timesheets: timesheets}) do
    %{data: render_many(timesheets, TimesheetView, "timesheet.json")}
  end

  def render("show.json", %{timesheet: timesheet}) do
    %{data: render_one(timesheet, TimesheetView, "timesheet.json")}
  end

  def render("timesheet.json", %{timesheet: timesheet}) do
    %{id: timesheet.id,
      jobId: timesheet.jobId,
      hours: timesheet.hours,
      date: timesheet.date,
      status: timesheet.status}
  end
end
