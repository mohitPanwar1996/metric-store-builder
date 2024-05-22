Hi Everyone, 
This repo contanins an overview of our metric store and the problem statement that we are having.
We have simple and formula metrics the simple metrics are just aggeragtions over the measures for that we are using CUBE.dev.
Formula metric will use other metrics, a user will feed formula in the metric builder component and we will parse and evaluate that
formula to generate results. We are struck on the formula metric in order to find out how to generate result.
A sample example of fomula metric is:
in order to calculate metric CAC(Customer acquistion cost) a user will enter following formula:

OFFSET((S&M Expense - Customer Marketing Expense), -1) / New Customers


We did our research and arrive at 2 approaches that looks promising.
1. Compose SQL and apply database UDFs
2. Compose Dataframes and apply pandas/spark UDFs


<img width="617" alt="image" src="https://github.com/mohitPanwar1996/metric-store-builder/assets/154788387/fee89543-5d18-44f6-9163-4c57c1176e4b">

<img width="662" alt="image" src="https://github.com/mohitPanwar1996/metric-store-builder/assets/154788387/5b37d360-6de4-4210-bb9a-949d67373a78">

We are seeking advice, solutions, or recommendations from developers, data folks, and consultants on how to effectively implement and
scale formula metrics in our system. We are open to use any other approach other than mentioned above. Specifically, 
we are interested in best practices, tools, or strategies that could help overcome the blockers we are experiencing in handling these advanced use cases.
