
export interface TaskNote {
    title: string,
    p: string,
    r: string,
    taskCount?: number,
    messCount?: number,
    cr?:boolean,
  }

  export const taskNotes:TaskNote[] = [
    {
      title: 'Payment Proccessing',
      p:"P/A: Working NCR discretionary tasks, pends payment to process",
      r:"R: Reset cal, pending stands.",
      cr:false


    },
    {
      title: 'TL handling',
      p:"P/A: Working NCR discretionary tasks, reviewed claim, pends TL handling",
      r:"R: Reset cal, pending stands."
    },
   {
      title: 'No SS FRB',
      p:"P/A: Working NCR discretionary tasks, pends SS FRB",
      r:"R: Reset cal, pending stands."
    },
    {
       title: 'No HRAC/ERAC FRB',
       p:"P/A: Working NCR discretionary tasks, pends FB from rental vendor",
       r:"R: Updated cal and pending"
     },
     {
      title: 'PIP/MPC handling',
      p:"P/A: Working NCR discretionary tasks, reviewed claim. EXP handling complete",
      r:"R: Updated cal and reassigned CO to PIP/MPC."
    },
    {
      title: 'No recent activity',
      p:"P/A: Working NCR discretionary tasks, no recent claim activity.",
      r:"R: Set cal 1 day forward, closed claim."
    },
    {
      title: 'Close Claim',
      p:"P/A: Working NCR discretionary tasks, all claim activity complete, NFH",
      r:"R: Set cal 1 day forward, closed claim."
    },
    {
      title: 'SUB handling',
      p:"P/A: Working NCR discretionary tasks, reviewed claim, pends SUB handling",
      r:"R: Reset cal."
    },
    {
      title: 'DSA handling',
      p:"P/A: Working NCR discretionary tasks, reviewed claim, pends DSA handling",
      r:"R: Reset cal."
    },
    {
      title: 'CCBAT handling',
      p:"P/A: Working NCR discretionary tasks, reviewed claim, pends CCBat handling",
      r:"R: Reset cal."
    },  {
      title: 'Waiting OIC Response',
      p:"P/A: Working NCR tasks, reviewed pending, still waiting on any contact from OIC or CLMNT ",
      r:"R: Reset cal."
    },  {
      title: 'PR Update CLMT Info',
      p:"P/A: Working new mail PR tasks, reviewed PR, updated CD and V2 info",
      r:"R: Cal Stands, Pending Stands "
    },  {
      title: 'PR No Update',
      p:"P/A: Working new mail PR tasks, reviewed PR, no new information to be updated",
      r:"R: Cal Stands, Pending Stands"
    },
    {
      title: 'PR Duplicate Request',
      p:"P/A: Working new mail PR tasks, reviewed PR, PR was a duplicate request and stated the PR will eventually be sent",
      r:"R: Cal Stands, Pending Stands"
    },
    {
      title: 'Rental Payment Posted',
      p:"P/A: Working NCR discretionary tasks, posted rental payment under COL 501 per UPD tool",
      r:"R: Updated cal 1 day forward."
    },
    {
      title: 'DW Recovery',
      p:"P/A:  Working discretionary tasks, DW Recovery",
      r:"R:  343 Template below:"
    },
    {
      title: 'Working New Mail',
      p:"P/A: working discretionary tasks new mail correspondence. Attached file to the claim",
      r:"R: reset cal, pending stands"
    },
    {
      title: 'Rental EXT: Paid',
      p:"P/A: working discretionary tasks Rental Extensions, Reviewed task, Rental car returned and FRB Paid",
      r:"R: Completed Task"
    },{
      title: 'Rental EXT: Pending Rental FRB',
      p:"P/A: working discretionary tasks Rental Extensions, Reviewed task, Pending FRB from vendor",
      r:"R: Completed Task"
    },
    {
      title: 'Rental EXT: CR to Shop: ECD',
      p:"P/A: working discretionary tasks Rental Extensions, Reviewed task",
      r:"R: CR to shop for ECD",
      cr: true
    },
    {
      title: 'Rental EXT: CR to Shop: Driveable?',
      p:"P/A: working discretionary tasks Rental Extensions, Reviewed task",
      r:"R: CR to shop for vehciles driveability status",
      cr: true
    },
    {
      title: 'Rental EXT: Extended',
      p:"P/A: working discretionary tasks Rental Extensions, Reviewed task",
      r:"R: Extended to ECD date"
    },
    {
      title: 'Rental EXT: Policy Max',
      p:"P/A: working discretionary tasks Rental Extensions, Reviewed task",
      r:"R: Extended to policy max date"
    },
    {
      title: 'Rental EXT: CR Policy Max',
      p:"P/A: working discretionary tasks Rental Extensions, Reviewed task",
      r:"R: Extended to policy max date, CR to Advise",
      cr: true
    },

  ]
