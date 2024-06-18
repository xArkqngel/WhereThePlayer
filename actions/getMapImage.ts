import { MapImage } from "@/utils/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getMapImage = async (gameId: string): Promise<MapImage[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

 const { data, error } = await supabase.rpc('get_random_image_path', {
    params : {
      game_id: gameId
    }
  });

  if (error) {
    console.error(error, "error");
  }

  return (data as any) || [];
};

export default getMapImage;
