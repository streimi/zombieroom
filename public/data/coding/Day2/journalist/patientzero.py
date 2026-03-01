import pandas as pd
import os

# Load your data [cite: 18, 19, 28]
df = pd.read_csv('intel/Day2/visits.csv')

def simulate_all_scenarios(df):
    all_names = df['Name'].unique()
    simulation_results = []

    for start_patient in all_names:
        # Tracks when each person was infected: {Name: Day_Infected}
        # Patient Zero is treated as infectious on Day 1 
        infected_on = {name: None for name in all_names}
        infected_on[start_patient] = -1 # Treated as infected before Day 1 to be infectious on Day 1 [cite: 23, 26]

        for day in range(1, 8):
            # 1. Identify who is INFECTIOUS today
            # Rule: Infectious two days after infection 
            infectious_today = [
                name for name, day_inf in infected_on.items() 
                if day_inf is not None and (day >= day_inf + 2 or day_inf == -1)
            ]
            
            # 2. Get locations where virus can spread
            danger_zones = df[(df['Day'] == day) & (df['Name'].isin(infectious_today))]['Location'].unique()
            
            # 3. Spread to healthy people at those locations [cite: 24]
            exposed = df[(df['Day'] == day) & 
                         (df['Location'].isin(danger_zones)) & 
                         (df['Name'].map(lambda x: infected_on[x] is None))]
            
            for person in exposed['Name'].unique():
                infected_on[person] = day

            # 4. Record the state of the world at the end of this day
            for person in all_names:
                inf_day = infected_on[person]
                
                # Determine Status String [cite: 20, 21]
                if inf_day is None:
                    status = "Healthy"
                elif day >= inf_day + 2 or inf_day == -1:
                    status = "Infectious"
                else:
                    status = "Infected"

                simulation_results.append({
                    "Scenario_PatientZero": start_patient,
                    "Day": day,
                    "Person": person,
                    "Status": status,
                    "InfectedOnDay": inf_day if inf_day is not None else "N/A"
                })

    return pd.DataFrame(simulation_results)

# Run the full simulation
results_df = simulate_all_scenarios(df)

# Save the full simulation for visualization
results_df.to_csv('coding/Day2/journalist/all_simulations.csv', index=False)

# --- FIND THE SOLUTION ---
# On day 7, all 20 patients must be infectious 
day_7_stats = results_df[(results_df['Day'] == 7) & (results_df['Status'] == "Infectious")]
summary = day_7_stats.groupby('Scenario_PatientZero').size()

# Filter for the patient who caused 20 infections
patient_zero_name = summary[summary == 20].index[0]

# Save the final solution as requested [cite: 29, 30]
with open('coding/Day2/journalist/patientzero.csv', 'w') as f:
    f.write(patient_zero_name)

print(f"Patient Zero identified as: {patient_zero_name}")