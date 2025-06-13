import supabaseClient from "../Utils/Superbase";
export async function getjobs(token, { location, company_id, searchQuery }) {
  const supabase = await supabaseClient (token);

  let query = supabase.from("Jobs").select("*, company:companies(name,logo_url),saved: saved_jobs(id)");

  if (location) {
    query = query.eq("location", location);
  }

  if (company_id) {
    query = query.eq("company_id", company_id);
  }

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data, error } = await query;
  if (error) {
    console.error("Error fectching Jobs:", error);
    return null;
  }
  return data;
}
