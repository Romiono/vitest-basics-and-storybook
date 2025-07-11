import App from "../App.tsx";
import type {ReactElement} from "react";
import Counter from "../pages/counter/counter.tsx";
import Request from "../pages/request/request.tsx"

export const Routs = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'counter',
                element: <Counter/>
            },
            {
                path: 'counter-with-hook',
                element: <div>counter-with-hook</div>
            },
            {
                path: 'request',
                element: <Request/>
            },
        ]
    },
]

interface Rout {
    path: string;
    element: ReactElement;
    children?: Rout[];
}

interface ParsedRoutes {
    path: string;
    element: ReactElement;
}

export function RoutParser(routs: Rout[], parentPath: string = ''): ParsedRoutes[] {
    return routs.reduce<Rout[]>((acc, route) => {
        // Формируем полный путь, учитывая родительский
        const fullPath = parentPath ? `${parentPath}${route.path}` : route.path;

        // Создаем текущий роут с обновленным путем
        const currentRoute: Rout = { element: route.element, path: fullPath };

        // Обрабатываем детей (если есть) и объединяем с аккумулятором
        const childRoutes = route.children
            ? RoutParser(route.children, fullPath)
            : [];

        return [...acc, currentRoute, ...childRoutes];
    }, []);
}


