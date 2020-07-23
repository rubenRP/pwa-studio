import gql from 'graphql-tag';

export const GET_BREADCRUMBS_QUERY = gql`
    query getBreadcrumbData($category_id: Int!) {
        storeConfig {
            id
            category_url_suffix
        }
        category(id: $category_id) {
            id
            breadcrumbs {
                category_id
                # We may not need level if "breadcrumbs" is sorted.
                category_level
                category_name
                category_url_path
            }
            id
            name
            url_path
        }
    }
`;
