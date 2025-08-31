import pandas as pd

# Cargar el csv original
df = pd.read_csv("autos_limpiov4.csv")

# Eliminar la columna de índices que se cargó del CSV
# df = df.drop("Unnamed: 0", axis=1)

# Limpiar columna Price: quitar $ y comas
# df["Price"] = df["Price"].replace('[\$,]', '', regex=True)

# Limpiar columna MSRP: quitar "MSRP", $ y comas
# df["MSRP"] = df["MSRP"].replace('[\$,MSRP ]', '', regex=True)

# df["MSRP"] = df["MSRP"].replace('Notspecified', 'Not Specified')

df['Model'] = df['Model'].str.replace(r'^\d{4}\s', '', regex=True)

df["MSRP"] = df["MSRP"].replace('pricedrop', ' price drop', regex=True)

# Guardar archivo limpio
df.to_csv("autos_limpiov5.csv", index=False)
