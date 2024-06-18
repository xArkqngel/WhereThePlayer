import { useSupabaseClient } from "@supabase/auth-helpers-react";



const useLoadImage = (imagePath:string) => {
  const supabase = useSupabaseClient();

  const { data } = supabase.storage.from("map_images").getPublicUrl(imagePath);

  return data?.publicUrl || '';
};

export default useLoadImage;
