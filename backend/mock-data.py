import csv
from faker import Faker
import random
from datetime import timedelta

fake = Faker()


# Function to generate a random date within a range
def random_date(start_date, end_date):
    return start_date + timedelta(days=random.randint(0, (end_date - start_date).days))


# Generate synthetic data for deals
def generate_deals(num_deals):
    products = ["Silver", "Gold", "Platinum"]
    deals = []
    for _ in range(num_deals):
        start_date = fake.date_between(start_date="-2y", end_date="today")
        end_date = fake.date_between(start_date=start_date, end_date="+2y")
        duration_in_months = (
            (end_date.year - start_date.year) * 12 + end_date.month - start_date.month
        )

        deals.append(
            {
                "account_name": fake.company(),
                "opportunity_start_date": start_date,
                "opportunity_end_date": end_date,
                "duration": duration_in_months,
                "tcv": round(
                    random.uniform(1000, 1000000), 2
                ),
                "product": random.choice(products),
                "type": random.choice(
                    ["New", "Renewal", "Upsell", "Downgrade"]
                ),
                "region": random.choice(["India", "APAC", "NA", "EMEA"]),
                "industry": random.choice(
                    [
                        "Communication Services",
                        "Financials",
                        "Health Care",
                        "Industrials",
                    ]
                ),
            }
        )
    return deals


# Generate 100 synthetic deals
deals_data = generate_deals(100)

# Write deals data to CSV file
csv_file = "deals_data.csv"
with open(csv_file, mode="w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=deals_data[0].keys())
    writer.writeheader()
    for deal in deals_data:
        writer.writerow(deal)

print("Data has been written to", csv_file)