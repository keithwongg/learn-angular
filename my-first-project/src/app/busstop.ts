export interface Services {
    busstop: BusStop
}

export interface BusStop {
    no: string,
    operator: string,
    next: ArrivalTimings,
    subsequent: ArrivalTimings,
    next2: ArrivalTimings,
    next3: ArrivalTimings
}

export interface ArrivalTimings {
    time: string,
    duration_ms: number,
    lat: number,
    lng: number,
    load: string,
    feature: string,
    type: string,
    visit_number: bigint,
    origin_code: string,
    destination_code: string
}