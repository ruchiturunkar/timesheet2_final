defmodule Times2.Timesheets.Timesheet do
  use Ecto.Schema
  import Ecto.Changeset

  schema "timesheets" do
    field :date, :date
    field :hours, :integer
    field :jobId, :string
    field :status, :string
    field :user, :id
    field :manager, :id

    timestamps()
  end

  @doc false
  def changeset(timesheet, attrs) do
    timesheet
    |> cast(attrs, [:jobId, :hours, :date, :status])
    |> validate_required([:jobId, :hours, :date, :status])
  end
end
