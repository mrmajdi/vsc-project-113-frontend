// @vsc repo:vsc-project-113-frontend file:src/lib/mockData.ts task:f5-src-lib-mockdata-ts module:frontend session:113
// این داده‌های مocke برای استفاده در صورت خطای SWR و عدم دسترسی به backend است

export interface Capital {
    id: number;
    name: string;
    country: string;
    timezone:string;
    offsetMinutes:number;
}

export const Capitals=[
    {id:1,name:"Beijing",country:"China",timezone:"Asia/Shanghai",offsetMinutes:48},
    {id:id}];
