class Report {
  constructor(
    public Id: number,
    public Name: string,
    public Description:string,
    public Areas:Area[],
    public Parameters:Parameter[]
  ) {}
}
