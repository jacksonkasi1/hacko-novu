import response from "@interface/response";

export async function handleResponse(
  promise: Promise<response>,
): Promise<response> {
  try {
    const result = await promise;
    return {
      status: result.status || 200,
      success: result.success || false,
      message: result.message || "",
      data: result.data || {},
    };
  } catch (error: any) {
    console.error(`Error occurred while handling response: ${error}`);
    return {
      status: error?.status || 500,
      success: false,
      message: error?.message || "Internal Server Error",
      data: {},
    };
  }
}
