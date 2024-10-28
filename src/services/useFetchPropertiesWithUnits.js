import { useEffect, useState } from "react";
import supabase from "../services/supabaseClient.js";

const useFetchPropertiesWithUnits = () => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("properties").select(`
          *,
          units (
            *,
            photos
          )
        `);

      if (error) {
        setFetchError("Could not fetch properties with units data");
        setData(null);
        console.error("Fetch Error:", error);
      } else {
        const aggregatedData = data.map((property) => {
          const { units } = property;

          // Sum beds, baths, sqft, and rent for each property
          const summary = units.reduce(
            (totals, unit) => ({
              beds: totals.beds + (unit.beds || 0),
              baths: totals.baths + (unit.baths || 0),
              sqft: totals.sqft + (unit.sqft || 0),
              rent: totals.rent + (unit.rent || 0),
              photos: unit.photos, // Get photos from unit
            }),
            { beds: 0, baths: 0, sqft: 0, rent: 0, photos: [] }
          );

          return { ...property, ...summary };
        });

        setData(aggregatedData);
        setFetchError(null);
      }
    };

    fetchData();
  }, []);

  return { data, fetchError };
};

export default useFetchPropertiesWithUnits;
