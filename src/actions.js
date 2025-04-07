export const addEntry = (entry) => async (dispatch) => {
  try {
    console.log("Entry:: ", entry);

    const url =
      entry.entryType === "addToStore"
        ? `https://inventory-storage-app-backend-student-neog.replit.app/add-to-store`
        : `https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });

    const data = await res.json();
    console.log(data);

    if (data.success === true) {
      dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data });
    }
  } catch (error) {
    console.error("Error adding Entry ", error);
  }
};

export const fetchInventory = () => async (dispatch) => {
  try {
    const res = await fetch(
      `https://inventory-storage-app-backend-student-neog.replit.app/storage-items`
    );

    const data = await res.json();
    if (data) {
      dispatch({ type: "FETCH_INVENTORY", payload: data });
    }
  } catch (error) {
    console.error("Failed to Fetch: ", error);
  }
};

export const fetchRemovedItems = () => async (dispatch) => {
  try {
    const res = await fetch(
      `https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store`
    );

    const data = await res.json();
    console.log(data);
    if (data) {
      dispatch({ type: "FETCH_REMOVED_ITEMS", payload: data });
    }
  } catch (error) {
    console.error("Failed to Fetch: ", error);
  }
};
