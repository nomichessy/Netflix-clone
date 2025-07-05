
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Tables } from '@/integrations/supabase/types';

type Content = Tables<'content'>;
type Watchlist = Tables<'watchlist'>;

export const useContent = () => {
  return useQuery({
    queryKey: ['content'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Content[];
    },
  });
};

export const useWatchlist = (userId?: string) => {
  return useQuery({
    queryKey: ['watchlist', userId],
    queryFn: async () => {
      if (!userId) return [];
      
      const { data, error } = await supabase
        .from('watchlist')
        .select(`
          *,
          content:content_id (*)
        `)
        .eq('user_id', userId);

      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });
};

export const useWatchlistActions = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const addToWatchlist = useMutation({
    mutationFn: async ({ contentId, userId }: { contentId: string; userId: string }) => {
      const { error } = await supabase
        .from('watchlist')
        .insert({ content_id: contentId, user_id: userId });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['watchlist'] });
      toast({
        title: "Added to My List",
        description: "Content has been added to your watchlist.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to add to watchlist.",
        variant: "destructive",
      });
    },
  });

  const removeFromWatchlist = useMutation({
    mutationFn: async ({ contentId, userId }: { contentId: string; userId: string }) => {
      const { error } = await supabase
        .from('watchlist')
        .delete()
        .eq('content_id', contentId)
        .eq('user_id', userId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['watchlist'] });
      toast({
        title: "Removed from My List",
        description: "Content has been removed from your watchlist.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to remove from watchlist.",
        variant: "destructive",
      });
    },
  });

  return { addToWatchlist, removeFromWatchlist };
};
