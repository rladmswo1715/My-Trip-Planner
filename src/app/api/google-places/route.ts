import { NextRequest, NextResponse } from 'next/server';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const fetchPlaceDetailsInKorean = async (placeId: string) => {
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${apiKey}&language=ko`;

  const response = await fetch(geocodeUrl);
  if (!response.ok) throw new Error('Failed to fetch place details in Korean');

  const data = await response.json();
  return data.results[0]?.formatted_address || 'No address available';
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}&components=country:KR`;
    const response = await fetch(url);
    const data: GooglePlacesAPIResponse = await response.json();

    const predictionsWithKoreanAddresses = await Promise.all(
      data.predictions.map(async (item: GooglePlaceAPIType) => {
        const koreanDescription = await fetchPlaceDetailsInKorean(
          item.place_id
        );
        return {
          ...item,
          korean_description: koreanDescription,
        };
      })
    );

    return NextResponse.json({ predictions: predictionsWithKoreanAddresses });
  } catch (error) {
    console.log('error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch places' },
      { status: 500 }
    );
  }
}
