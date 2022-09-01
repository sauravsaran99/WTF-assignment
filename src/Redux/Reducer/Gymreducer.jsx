
import { GYM_ERROR } from "../Action/Gym";
import { GYM_SUCCESS } from "../Action/Gym";
import { GYM_LOADING } from "../Action/Gym";

const initStore = {
    loading: false,
    data: [],
    error: false
}

export const Gymreducer = (store=initStore, action) => {
    switch (action.type) {
        case GYM_LOADING:
            return (
                {
                    ...store,
                    loading: true,
                    data: [],
                    error: false
                }
            )
                case GYM_SUCCESS:
                    return (
                        {
                            ...store,
                            loading: false,
                            data: action.payload,
                            error: false
                        }
            )

            case GYM_ERROR:
                return (
                    {
                        ...store,
                        loading: false,
                        data: [],
                        error: true
                    }
                )

                default: return store;
    }
}